import { useState, useEffect } from 'react';

interface ScreenSizeBlockerProps {
  children: React.ReactNode;
  minWidth?: number;
}

const ScreenSizeBlocker: React.FC<ScreenSizeBlockerProps> = ({
  children,
  minWidth = 1024,
}) => {
  const [isWideEnough, setIsWideEnough] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsWideEnough(window.innerWidth >= minWidth);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [minWidth]);

  if (!isWideEnough) {
    return (
      <div className='flex min-h-screen w-full items-center justify-center bg-background text-foreground p-8'>
        <div className='text-center space-y-4 max-w-md'>
          <div className='text-6xl mb-4'>📱</div>
          <h1 className='text-2xl font-bold'>Desktop Required</h1>
          <p className='text-muted-foreground'>
            This application is optimized for desktop viewing and requires a
            minimum screen width of {minWidth}px.
          </p>
          <p className='text-sm text-muted-foreground'>
            Mobile and tablet support coming soon!
          </p>
          <div className='mt-6 p-4 bg-muted rounded-lg'>
            <p className='text-sm'>
              Current width:{' '}
              <span className='font-mono'>
                {typeof window !== 'undefined' ? window.innerWidth : 0}px
              </span>
            </p>
            <p className='text-sm'>
              Required: <span className='font-mono'>{minWidth}px</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ScreenSizeBlocker;
