import DotBackground from '@/components/backgrounds/DotBackground';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Helmet } from 'react-helmet-async';

const WithHooks = () => {
  return (
    <>
      <Helmet>
        <title>With Hooks - Spaceman RTA Framework</title>
        <meta
          name='description'
          content='Explore React hooks and theme management with the Spaceman RTA Framework'
        />
        <meta
          name='keywords'
          content='React, Hooks, Theme, Toggle, Spaceman, Framework'
        />
      </Helmet>
      <main className='flex flex-col items-center justify-start py-16 h-full bg-transparent'>
        <DotBackground />
        <section className='bg-transparent w-full flex items-center justify-center relative'>
          <div className='flex items-center justify-center gap-6 p-6 rounded-lg border border-border bg-background w-1/2'>
            <div className='flex gap-2 items-center justify-center'>
              <label className='text-md font-medium'>Circle Theme:</label>
              <ThemeToggle />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WithHooks;
