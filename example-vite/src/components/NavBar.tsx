import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

const navItems = [
  { name: 'With-Components', path: '/' },
  { name: 'With-Hook', path: '/hook' },
];

const NavBar = () => {
  const location = useLocation();
  const pathName = location.pathname || '/';

  const [hoveredPath, setHoveredPath] = useState<string | null>(pathName);
  return (
    <section className='col-start-2 xl:col-start-3 flex items-center justify-center'>
      {navItems.map((item) => {
        const active = pathName === item.path;

        return (
          <Link
            key={item.path}
            className={`px-5 shrink py-3 text-muted-foreground rounded-none leading-3.5 text-xs lg:text-sm relative no-underline duration-300 ease-in-out ${
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
                className='absolute bottom-0 left-0 h-full bg-primary mix-blend-difference rounded-none -z-10'
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
                className='absolute -bottom-2 rounded-full left-0 right-0 px-2 flex w-full items-center justify-center z-50'
                transition={{ duration: 0.5 }}
                layoutId='pill'
              >
                <div className='h-1.5 rounded-full w-full border border-accent bg-accent'></div>
              </motion.div>
            )}
          </Link>
        );
      })}
    </section>
  );
};

export default NavBar;
