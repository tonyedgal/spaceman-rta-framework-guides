import BackgroundPattern from '@/components/backgrounds/BackgroundPattern';
import CardDemo from '@/components/card/CardDemo';
import { DialogDemo } from '@/components/DialogDemo';
import { DrawerDemo } from '@/components/DrawerDemo';
import { DropdownMenuDemo } from '@/components/DropdownMenuDemo';
import KanbanDemo from '@/components/kanban/KanbanDemo';
import { SheetDemo } from '@/components/SheetDemo';
import ThemeSection from '@/components/theme/ThemeSection';
import { SpacemanThemeProvider } from '@space-man/react-theme-animation';
import { Helmet } from 'react-helmet-async';

const WithComponents = () => {
  return (
    <>
      <Helmet>
        <title>With Components - Spaceman RTA Framework</title>
        <meta
          name='description'
          content='Explore UI components built with the Spaceman RTA Framework'
        />
        <meta
          name='keywords'
          content='React, Components, UI, Spaceman, Framework'
        />
      </Helmet>
      <main className='flex flex-col items-center justify-start py-16 h-full bg-transparent'>
        <BackgroundPattern />
        <main className='flex flex-col gap-12 w-full bg-transparent transition-colors'>
          <section className='container mx-auto px-4 xl:px-12 py-8'>
            <SpacemanThemeProvider
              themes={['light', 'dark', 'system']}
              colorThemes={['default', 'caffeine', 'mono', 'supabase']}
              defaultTheme='system'
              defaultColorTheme='default'
            >
              <ThemeSection />
            </SpacemanThemeProvider>
          </section>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 xl:px-12 py-4'>
            <div className='flex flex-col items-center gap-4'>
              <CardDemo />
              <code className='block bg-muted p-3 rounded font-mono text-xs whitespace-pre'>
                {`https://reui.io/docs/card`}
              </code>
            </div>
            <div className='grid grid-col-1 grid-rows-[1fr_1fr_1fr_1fr_1fr] items-start gap-8 border border-border p-8 backdrop-blur bg-background/10'>
              <div className='grid grid-cols-[120px_56px] items-center gap-4'>
                <p>Sheet:</p>
                <SheetDemo />
              </div>
              <div className='grid grid-cols-[120px_56px] items-center gap-4'>
                <p>DropdownMenu:</p>
                <DropdownMenuDemo />
              </div>
              <div className='grid grid-cols-[120px_56px] items-center gap-4'>
                <p>Drawer:</p>
                <DrawerDemo />
              </div>
              <div className='grid grid-cols-[120px_56px] items-center gap-4'>
                <p>Dialog:</p>
                <DialogDemo />
              </div>
              <div>
                <code className='block bg-muted p-3 rounded font-mono text-xs whitespace-pre w-fit mx-auto'>
                  {`https://ui.shadcn.com/docs/components`}
                </code>
              </div>
            </div>
          </section>
          <section className='grid grid-cols-1 gap-6 px-4 xl:px-12 py-4'>
            <div className='flex flex-col items-center gap-4'>
              <KanbanDemo />
              <code className='block bg-muted p-3 rounded font-mono text-xs whitespace-pre'>
                {`https://reui.io/docs/kanban`}
              </code>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default WithComponents;
