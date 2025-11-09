import { Button } from './ui/button';
import { Snippet } from '@heroui/snippet';
import Icon from './icon';

const Hero = () => {
  return (
    <section className='relative flex flex-col items-center justify-center text-center gap-6 py-20 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-5xl font-semibold leading-tight'>
        Spaceman React Theme Animation
      </h1>
      <p className='text-md text-muted-foreground max-w-3xl'>
        A powerful React library for building stunning, multi-themed
        applications with ease and animated transitions with the View Transition
        API.
      </p>
      <div className='flex items-center gap-4'>
        <Button variant='outline' asChild>
          <a
            href='https://github.com/tonyedgal/spaceman-react-theme-animation'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='github' className='w-5 h-5 mr-2' />
            View on GitHub
          </a>
        </Button>
        <Button variant='outline' asChild>
          <a
            href='https://www.npmjs.com/package/@space-man/react-theme-animation'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='npm' className='w-8 h-8 mr-2' />
            View on NPM
          </a>
        </Button>
      </div>
      <div className='flex items-center p-3 bg-background/50 border border-border rounded-md mt-6'>
        <Snippet>npm install @space-man-react-theme-animation</Snippet>
      </div>
    </section>
  );
};

export default Hero;
