import BackgroundPattern from '@/components/backgrounds/BackgroundPattern';
import CardDemo from '@/components/card/CardDemo';
import { DialogDemo } from '@/components/DialogDemo';
import { DrawerDemo } from '@/components/DrawerDemo';
import { DropdownMenuDemo } from '@/components/DropdownMenuDemo';
import KanbanDemo from '@/components/kanban/KanbanDemo';
import { SheetDemo } from '@/components/SheetDemo';
import ThemeSection from '@/components/theme/ThemeSection';

const WithComponents = () => {
  return (
    <>
      <main className='flex flex-col items-center justify-start py-8 md:py-16 h-full bg-transparent'>
        <BackgroundPattern />
        <main className='flex flex-col gap-8 md:gap-12 w-full bg-transparent transition-colors'>
          <section className='container mx-auto px-4 md:px-6 xl:px-12 py-4 md:py-8'>
            <ThemeSection />
          </section>
          <section className='grid grid-cols-1 xl:grid-cols-2 gap-6 px-4 md:px-6 xl:px-12 py-4'>
            <div className='flex flex-col items-center gap-4 w-full max-w-md mx-auto xl:max-w-none'>
              <CardDemo />
              <code className='block bg-muted p-3 rounded font-mono text-xs whitespace-pre w-full overflow-x-auto'>
                {`https://reui.io/docs/card`}
              </code>
            </div>
            <div className='grid grid-cols-1 gap-6 border border-border p-4 md:p-8 backdrop-blur bg-background/10 rounded-lg'>
              <div className='grid grid-cols-[1fr_auto] sm:grid-cols-[120px_auto] items-center gap-4'>
                <p className='text-sm md:text-base'>Sheet:</p>
                <SheetDemo />
              </div>
              <div className='grid grid-cols-[1fr_auto] sm:grid-cols-[120px_auto] items-center gap-4'>
                <p className='text-sm md:text-base'>DropdownMenu:</p>
                <DropdownMenuDemo />
              </div>
              <div className='grid grid-cols-[1fr_auto] sm:grid-cols-[120px_auto] items-center gap-4'>
                <p className='text-sm md:text-base'>Drawer:</p>
                <DrawerDemo />
              </div>
              <div className='grid grid-cols-[1fr_auto] sm:grid-cols-[120px_auto] items-center gap-4'>
                <p className='text-sm md:text-base'>Dialog:</p>
                <DialogDemo />
              </div>
              <div>
                <code className='block bg-muted p-3 rounded font-mono text-xs whitespace-pre w-fit mx-auto overflow-x-auto'>
                  {`https://ui.shadcn.com/docs/components`}
                </code>
              </div>
            </div>
          </section>
          <section className='grid grid-cols-1 gap-6 px-4 md:px-6 xl:px-12 py-4'>
            <div className='flex flex-col items-center gap-4 w-full overflow-x-auto'>
              <div className='w-full min-w-3xl'>
                <KanbanDemo />
              </div>
              <code className='block bg-muted p-3 rounded font-mono text-xs whitespace-pre w-full overflow-x-auto'>
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
