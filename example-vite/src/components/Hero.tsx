import { Button } from './ui/button';
import Icon from './icon';
import InstallSnippet from './InstallSnippet';
import { Reveal } from './Reveal';
import CornerBrackets from './CornerBrackets';

const Hero = () => {
  return (
    <section className='relative flex h-full flex-col items-center justify-center gap-6 px-4 text-center sm:px-6 lg:px-8'>
      <section className='relative flex flex-col gap-6 px-7 py-4'>
        <CornerBrackets />
        <div className='border-b'>
          <Reveal slideDirection='top-blur'>
            <h1 className='pb-3 text-5xl leading-tight font-semibold tracking-tighter'>
              Spaceman React Theme Animation
            </h1>
          </Reveal>
        </div>
        <Reveal slideDirection='top-blur' delay={0.25}>
          <p className='text-md max-w-2xl text-muted-foreground'>
            A powerful React library for building stunning, multi-themed
            applications with ease and animated transitions with the View
            Transition API.
          </p>
        </Reveal>
      </section>
      <Reveal slideDirection='top-blur' delay={0.5}>
        <section className='flex items-center gap-4'>
          <Button variant='outline' asChild>
            <a
              href='https://github.com/tonyedgal/spaceman-react-theme-animation'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon name='github' className='mr-2 h-5 w-5' />
              View on GitHub
            </a>
          </Button>
          <Button variant='outline' asChild>
            <a
              href='https://www.npmjs.com/package/@space-man/react-theme-animation'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon name='npm' className='mr-2 h-8 w-8' />
              View on NPM
            </a>
          </Button>
        </section>
      </Reveal>
      <Reveal width='100%' slideDirection='bottom-blur' delay={0.75}>
        <InstallSnippet />
      </Reveal>
    </section>
  );
};

export default Hero;
