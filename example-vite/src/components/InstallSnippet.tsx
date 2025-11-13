import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from '@/components/ui/shadcn-io/snippet';
import { BoxIcon } from 'lucide-react';
import { useState } from 'react';

const commands = [
  {
    label: 'pnpm',
    icon: BoxIcon,
    code: 'pnpm install @space-man-react-theme-animation',
  },
  {
    label: 'npm',
    icon: BoxIcon,
    code: 'npm install @space-man-react-theme-animation',
  },
  {
    label: 'yarn',
    icon: BoxIcon,
    code: 'yarn add @space-man-react-theme-animation',
  },
];

const InstallSnippet = () => {
  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);
  return (
    <Snippet onValueChange={setValue} value={value} className='max-w-xl'>
      <SnippetHeader>
        <SnippetTabsList>
          {commands.map((command) => (
            <SnippetTabsTrigger key={command.label} value={command.label}>
              <command.icon size={14} />
              <span>{command.label}</span>
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        {activeCommand && (
          <SnippetCopyButton
            onCopy={() =>
              console.log(`Copied "${activeCommand.code}" to clipboard`)
            }
            onError={() =>
              console.error(
                `Failed to copy "${activeCommand.code}" to clipboard`
              )
            }
            value={activeCommand.code}
          />
        )}
      </SnippetHeader>
      {commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
};
export default InstallSnippet;
