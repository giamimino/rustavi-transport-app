import { Pressable, View } from 'react-native';
import { Text } from '../ui/text';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Screen from './Screen';
import { Href, usePathname, useRouter } from 'expo-router';
import React from 'react';
import clsx from 'clsx';
import { Button } from '../ui/button';

type TabItemProps = {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  label: string;
  path: Href;
  subRoute: string | null;
};

const pages: (TabItemProps & { id: string })[] = [
  { path: '/', label: 'Home', id: 'home', icon: 'home', subRoute: null },
  {
    path: '/schedules/schedules',
    label: 'Stops',
    id: 'stops',
    icon: 'bus-stop',
    subRoute: null,
  },
  {
    path: '/busses/busses',
    label: 'Bus',
    id: 'bus',
    icon: 'bus-marker',
    subRoute: null,
  },
  {
    path: '/account/me',
    label: 'Account',
    id: 'account',
    icon: 'account',
    subRoute: '/account',
  },
];

const TabItem = ({ icon, label, path, subRoute }: TabItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const onPress = () => {
    router.push(path);
  };

  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-center py-2">
      <View className="h-7 w-7 items-center justify-center">
        <Text
          className={clsx(
            !(subRoute
              ? pathname.startsWith(subRoute as string)
              : pathname === path)
              ? 'text-card-muted-foreground'
              : 'text-primary',
          )}>
          <MaterialCommunityIcons name={icon} size={24} />
        </Text>
      </View>
      <Text
        className={clsx(
          'mt-0.5 text-center text-xs font-poppins-medium',
          !(subRoute
            ? pathname.startsWith(path as string)
            : pathname === path)
            ? 'text-card-muted-foreground'
            : 'text-primary',
        )}>
        {label}
      </Text>
    </Pressable>
  );
};

export const BottomBar = () => (
  <View className="flex-row px-3 py-1">
    {pages.map(p => (
      <TabItem
        subRoute={p.subRoute}
        label={p.label}
        icon={p.icon}
        path={p.path}
        key={p.id}
      />
    ))}
  </View>
);

export function Header() {
  return (
    <View
      className="absolute bg-secondary-background w-full bottom-0 left-0 rounded-t-2xl"
      style={{ boxShadow: `0px 0px 40px 5px rgba(0, 0, 0, 0.19)` }}>
      <BottomBar />
      <View className="h-5"></View>
    </View>
  );
}
