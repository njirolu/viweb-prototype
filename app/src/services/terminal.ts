import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

export function createTerminalInstance(container: HTMLElement, onData: (data: string) => void) {
  const terminal = new Terminal({
    convertEol: true,
    cursorBlink: true,
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    fontSize: 12,
    theme: {
      background: '#171923',
      foreground: '#dde7ff',
      cursor: '#d4ecff',
      black: '#1b1f2c',
      brightBlack: '#6a7590',
      blue: '#78b6ff',
      brightBlue: '#3fe0ff',
      cyan: '#53dfd2',
      brightCyan: '#53dfd2',
      green: '#8de29e',
      brightGreen: '#b5f7be',
      magenta: '#d6b0ff',
      brightMagenta: '#ffd59f',
      red: '#ff6a7f',
      brightRed: '#ff8f8f',
      white: '#d4d8e8',
      brightWhite: '#ffffff',
      yellow: '#ffd68b',
      brightYellow: '#ffe580',
    },
  });

  const fitAddon = new FitAddon();
  const webLinksAddon = new WebLinksAddon();

  terminal.loadAddon(fitAddon);
  terminal.loadAddon(webLinksAddon);
  terminal.open(container);
  fitAddon.fit();

  const dataDisposable = terminal.onData(onData);

  return {
    terminal,
    fitAddon,
    dispose: () => {
      dataDisposable.dispose();
      terminal.dispose();
    },
  };
}
