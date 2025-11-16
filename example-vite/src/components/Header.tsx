import { Link } from 'react-router';
import Spaceman from '../assets/Spaceman.webp';
import Icon from './icon';
import { useGithubStars } from '@/hooks/useGithubStars';
import { Button } from './ui/button';

export default function Header() {
  const { stars } = useGithubStars(
    'tonyedgal',
    'spaceman-react-theme-animation'
  );

  return (
    <header className='border rounded-xs shadow-sm flex items-center border-border w-full mx-auto p-1 sticky top-0 z-50 bg-transparent backdrop-blur-md'>
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

        <Button variant='ghost' asChild className='rounded-full'>
          <a
            href='https://github.com/tonyedgal/spaceman-react-theme-animation'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center p-2 hover:opacity-85 transition-opacity rounded-full'
          >
            <Icon name='github' className='w-5 h-5 mr-2' />
            <p className='text-sm leading-0 flex items-center mt-0.75'>
              {stars > 0 && stars.toString()}
            </p>
          </a>
        </Button>
      </nav>
    </header>
  );
}
