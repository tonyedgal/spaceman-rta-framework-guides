import DotBackground from '@/components/backgrounds/DotBackground';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Helmet } from 'react-helmet-async';
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
        <section className='flex items-center justify-center gap-6 p-6 rounded-lg border border-border bg-background z-50'>
          <div className='flex gap-2 items-center justify-center'>
            <label className='text-sm font-medium'>Circle Theme:</label>
            <ThemeToggle />
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <label className='text-sm font-medium'>Slide Theme:</label>
            <SlideThemeToggle slideDirection={slideDirection} />
          </div>
          <div className='flex items-center gap-2 p-2 bg-background rounded-md'>
            <label className='text-sm font-medium'>Slide direction:</label>
            <Select
              value={slideDirection}
              onValueChange={(v) => setSlideDirection(v as SlideDirection)}
            >
              <SelectTrigger size='sm' className='w-36'>
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
