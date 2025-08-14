import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import Spaceman from '../assets/Spaceman.webp'; // Adjust the path as necessary

const navItems = [
  { name: 'With-Components', path: '/' },
  { name: 'With-Hook', path: '/hook' },
];

export default function Header() {
  const location = useLocation();
  const pathName = location.pathname || '/';

  const [hoveredPath, setHoveredPath] = useState<string | null>(pathName);

  return (
    <div className='border rounded-xs shadow-sm flex items-center border-border w-full mx-auto p-1 sticky top-0 z-50 bg-transparent backdrop-blur-md'>
      <nav className='flex items-center relative justify-between z-100 rounded-lg w-full max-w-[1200px] mx-auto'>
        <Link to='/' className='px-1'>
          <img
            src={Spaceman}
            alt='Portrait'
            height={'32'}
            width={'32'}
            className='rounded-full mr-1'
          />
        </Link>

        <section>
          {navItems.map((item) => {
            const active = pathName === item.path;

            return (
              <Link
                key={item.path}
                className={`px-5 shrink py-3 text-muted-foreground rounded-none leading-[14px] text-xs lg:text-sm relative no-underline duration-300 ease-in-out ${
                  active ? 'font-semibold' : ''
                }`}
                to={item.path}
                data-active={active}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathName)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className='absolute bottom-0 left-0 h-full bg-muted mix-blend-difference rounded-none -z-10'
                    layoutId='navbar'
                    aria-hidden='true'
                    style={{
                      width: '100%',
                    }}
                    transition={{
                      // type: "spring",
                      bounce: 0,
                      stiffness: 100,
                      damping: 10,
                      duration: 0.3,
                    }}
                  />
                )}
                {active && (
                  <motion.div
                    className='absolute bottom-[-6px] rounded-full left-0 right-0 px-2 flex w-full items-center justify-center'
                    transition={{ duration: 0.5 }}
                    layoutId='pill'
                  >
                    <div className='h-[2px] w-full border border-accent bg-accent'></div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </section>
      </nav>
    </div>
  );
}
