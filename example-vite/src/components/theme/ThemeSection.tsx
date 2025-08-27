import {
  ThemeSwitcher,
  ThemeSelector,
  useSpacemanTheme,
} from '@space-man/react-theme-animation';

const ThemeSection = () => {
  const {
    theme: currentTheme,
    colorTheme: currentColorTheme,
    setTheme,
    setColorTheme,
  } = useSpacemanTheme();

  return (
    <section className='flex flex-wrap items-center h-36 md:h-24 px-12 justify-between rounded-lg border border-border bg-background'>
      <div className='flex gap-2 items-center'>
        <label className='text-xs sm:text-md font-medium'>Default Style:</label>
        <ThemeSwitcher
          themes={['light', 'dark', 'system']}
          currentTheme={currentTheme}
          onThemeChange={setTheme}
        />
      </div>

      <div className='flex gap-2 items-center'>
        <label className='text-xs sm:text-md font-medium'>
          Light/Dark Only:
        </label>
        <ThemeSwitcher
          themes={['light', 'dark']}
          currentTheme={currentTheme}
          onThemeChange={setTheme}
        />
      </div>

      <div className='flex gap-2 items-center'>
        <label className='text-xs sm:text-md font-medium'>
          Theme Selector:
        </label>
        <ThemeSelector
          colorThemes={[
            'default',
            'caffeine',
            'mono',
            'supabase',
            'mocha',
            'perpetuity',
          ]}
          currentColorTheme={currentColorTheme}
          onColorThemeChange={setColorTheme}
        />
      </div>
    </section>
  );
};

export default ThemeSection;
