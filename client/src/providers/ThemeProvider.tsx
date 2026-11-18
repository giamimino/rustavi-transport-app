// src/providers/theme-provider.tsx
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorScheme } from 'nativewind';
import { THEME } from '@/lib/theme';

export type ThemePreference = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

type ThemeContextValue = {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  colors: (typeof THEME)['light'];
  setTheme: (theme: ThemePreference) => void;
  isReady: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const ThemeKey = '@app-theme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme();
  const [theme, setThemeState] = useState<ThemePreference>('system');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(ThemeKey);
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
          setThemeState(stored);
        }
      } catch {}
      setIsReady(true);
    })();
  }, []);

  const resolvedTheme: ResolvedTheme =
    theme === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : theme;

  useEffect(() => {
    colorScheme.set(theme);
  }, [theme]);

  const setTheme = useCallback((next: ThemePreference) => {
    setThemeState(next);
    AsyncStorage.setItem(ThemeKey, next).catch(() => {});
  }, []);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      colors: THEME[resolvedTheme],
      setTheme,
      isReady,
    }),
    [theme, resolvedTheme, setTheme, isReady],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
