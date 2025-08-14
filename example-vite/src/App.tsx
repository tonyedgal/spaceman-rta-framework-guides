import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router';
import Header from './components/Header';
import WithComponents from './pages/WithComponents';
import WithHooks from './pages/WithHooks';
import { ThemeProvider } from './components/theme/ThemeProvider';
import ScreenSizeBlocker from './components/ScreenSizeBlocker';
// import { SpacemanThemeProvider } from "@space-man/react-theme-animation";

function Layout() {
  return (
    <main className='relative h-screen w-full overflow-hidden'>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <div className='relative grid h-full grid-cols-[2.5rem_auto_2.5rem] xl:grid-cols-[auto_2rem_1200px_2rem_auto]'>
          <div className='relative col-start-2 xl:col-start-3 h-full w-full overflow-y-auto'>
            <Outlet />
          </div>

          <div className='relative -right-px col-start-1 xl:col-start-2 row-span-full row-start-1 border-x border-border bg-[image:repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px]'></div>
          <div className='relative -left-px col-start-3 xl:col-start-4 row-span-full row-start-1 border-x border-border bg-[image:repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px]'></div>
        </div>
      </ThemeProvider>
    </main>
  );
}

function App() {
  return (
    <ScreenSizeBlocker>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<WithComponents />} />
            <Route path='hook' element={<WithHooks />} />
          </Route>
        </Routes>
      </Router>
    </ScreenSizeBlocker>
  );
}

export default App;
