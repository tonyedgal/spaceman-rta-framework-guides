import DotBackground from '@/components/backgrounds/DotBackground';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  SlideDirection,
  SlideThemeToggle,
} from '@/components/theme/SlideThemeToggle';
import { useState } from 'react';

const WithHooks = () => {
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('left');

  return (
    <>
      <main className='flex flex-col items-center justify-start py-8 md:py-16 h-full bg-transparent px-4'>
        <DotBackground />
        <section className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-4 md:p-6 rounded-lg border border-border bg-background z-50 w-full max-w-4xl'>
          <div className='flex gap-2 items-center justify-center'>
            <label className='text-xs sm:text-sm font-medium whitespace-nowrap'>
              Circle Theme:
            </label>
            <ThemeToggle />
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <label className='text-xs sm:text-sm font-medium whitespace-nowrap'>
              Slide Theme:
            </label>
            <SlideThemeToggle slideDirection={slideDirection} />
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-2 p-2 bg-background rounded-md w-full sm:w-auto'>
            <label className='text-xs sm:text-sm font-medium whitespace-nowrap'>
              Slide direction:
            </label>
            <Select
              value={slideDirection}
              onValueChange={(v) => setSlideDirection(v as SlideDirection)}
            >
              <SelectTrigger size='sm' className='w-full sm:w-36'>
                <SelectValue>{slideDirection}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='left'>Left</SelectItem>
                <SelectItem value='right'>Right</SelectItem>
                <SelectItem value='top'>Top</SelectItem>
                <SelectItem value='bottom'>Bottom</SelectItem>
                <SelectItem value='top-left'>Top Left</SelectItem>
                <SelectItem value='top-right'>Top Right</SelectItem>
                <SelectItem value='bottom-left'>Bottom Left</SelectItem>
                <SelectItem value='bottom-right'>Bottom Right</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>
      </main>
    </>
  );
};

export default WithHooks;
