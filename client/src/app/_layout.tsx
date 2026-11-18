import '../../global.css';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { AppProviders } from '@/providers/AppProviders';
import { useTheme } from '@/providers/ThemeProvider';
import { NAV_THEME, THEME } from '@/lib/theme';
import { ThemeProvider as NavigationThemeProvider } from 'expo-router/react-navigation';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

function RootStack() {
  const { resolvedTheme, isReady } = useTheme();

  useEffect(() => {
    if (isReady) SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null; // splash stays up, so no flash of the wrong theme

  const backgroundColor = THEME[resolvedTheme].background;

  return (
    <NavigationThemeProvider value={NAV_THEME[resolvedTheme]}>
      <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor },
        }}
      />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Black': require('@/assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('@/assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('@/assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraBoldItalic': require('@/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-ExtraLightItalic': require('@/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf'),
    'Poppins-Italic': require('@/assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('@/assets/fonts/Poppins/Poppins-LightItalic.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-MediumItalic': require('@/assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-SemiBoldItalic': require('@/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins-ThinItalic': require('@/assets/fonts/Poppins/Poppins-ThinItalic.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppProviders>
      <RootStack />
    </AppProviders>
  );
}
