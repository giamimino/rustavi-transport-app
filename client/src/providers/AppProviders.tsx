import { PortalHost } from '@rn-primitives/portal';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './ThemeProvider';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
      <PortalHost />
    </ThemeProvider>
  );
}
