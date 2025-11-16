import { Button } from './ui/button';
import Icon from './icon';
import InstallSnippet from './InstallSnippet';
import { Reveal } from './Reveal';

const Hero = () => {
  return (
    <section className='relative flex flex-col items-center justify-center text-center gap-6 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='border-b'>
        <Reveal slideDirection='top-blur'>
          <h1 className='text-5xl font-semibold leading-tight tracking-tighter pb-3'>
            Spaceman React Theme Animation
          </h1>
        </Reveal>
      </div>
      <Reveal slideDirection='top-blur' delay={0.25}>
        <p className='text-md text-muted-foreground max-w-2xl'>
          A powerful React library for building stunning, multi-themed
          applications with ease and animated transitions with the View
          Transition API.
        </p>
      </Reveal>
      <Reveal slideDirection='top-blur' delay={0.5}>
        <section className='flex items-center gap-4'>
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
        </section>
      </Reveal>
      <Reveal slideDirection='bottom-blur' delay={0.75}>
        <InstallSnippet />
      </Reveal>
    </section>
  );
};

export default Hero;
