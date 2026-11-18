import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/providers/ThemeProvider';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  const { setTheme, theme } = useTheme();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Button onPress={() => router.push('/account/settings')}>
        <Text>Settigns</Text>
      </Button>
      <Button onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Text>Toggle Theme</Text>
      </Button>
    </View>
  );
}
