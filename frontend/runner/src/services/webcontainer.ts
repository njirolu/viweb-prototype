import type { WebContainer, WebContainerProcess } from '@webcontainer/api';
import { WebContainer as WebContainerApi } from '@webcontainer/api';
import type { Terminal } from 'xterm';

export type TerminalDimensions = {
  cols: number;
  rows: number;
};

export async function bootWebContainer() {
  return WebContainerApi.boot();
}

export function getTerminalSize(terminal: Terminal | null): TerminalDimensions {
  const cols = Math.max(terminal?.cols || 80, 20);
  const rows = Math.max(terminal?.rows || 24, 8);

  return { cols, rows };
}

export async function streamProcessOutput(
  process: WebContainerProcess,
  label: string,
  write: (message: string) => void
) {
  const reader = process.output.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }

    if (value) {
      write(`[${label}] ${value}`);
    }
  }
}

export async function runAndWait(
  webcontainer: WebContainer,
  command: string,
  args: string[],
  terminalSize: TerminalDimensions,
  write: (message: string) => void
) {
  const process = await webcontainer.spawn(command, args, {
    terminal: terminalSize,
  });

  void streamProcessOutput(process, `${command} ${args.join(' ')}`, write);

  const exitCode = await process.exit;
  if (exitCode !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with exit code ${exitCode}.`);
  }
}
