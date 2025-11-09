import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router';
import Header from './components/Header';
import WithComponents from './pages/WithComponents';
import WithHooks from './pages/WithHooks';
import { ThemeProvider } from './components/theme/ThemeProvider';
import ScreenSizeBlocker from './components/ScreenSizeBlocker';
import Hero from './components/Hero';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from './components/NavBar';

function Layout() {
  return (
    <>
      <title>Spaceman React Theme Animation</title>
      <meta
        name='description'
        content='Explore the Spaceman React Theme Animation library and its features.'
      />
      <meta
        name='keywords'
        content='React, Components, Hooks, UI, Spaceman, View Transition API, Animated dark mode, Animations, Theme Animation'
      />
      <link rel='author' href='https://twitter.com/TonyEdgal' />
      <link
        rel='author'
        href='https://www.linkedin.com/in/anthony-edgal-8ba13715b/'
      />
      <main className='relative h-screen w-full overflow-auto'>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className='relative grid h-full grid-rows-[30rem_1px_3rem_1px_auto] grid-cols-[2.5rem_auto_2.5rem] xl:grid-cols-[auto_2rem_1200px_2rem_auto]'>
            <main className='col-start-2 xl:col-start-3'>
              <Hero />
            </main>

            <div className='relative xl:col-start-3 col-start-2 row-start-2 h-px bg-border'></div>

            <NavBar />

            <div className='relative xl:col-start-3 col-start-2 row-start-4 h-px bg-border'></div>

            <div className='relative col-start-2 xl:col-start-3 h-full w-full'>
              <Outlet />
            </div>

            <div className='relative col-start-1 xl:col-start-2 row-span-full row-start-1 border-x border-border bg-[repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]'></div>
            <div className='relative col-start-3 xl:col-start-4 row-span-full row-start-1 border-x border-border bg-[repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]'></div>
          </div>
        </ThemeProvider>
      </main>
    </>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <ScreenSizeBlocker>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<WithComponents />} />
              <Route path='hook' element={<WithHooks />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </ScreenSizeBlocker>
  );
}

export default App;
