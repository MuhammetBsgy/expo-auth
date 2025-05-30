import { Tabs } from 'expo-router';
import '../../global.css';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="tabsMain" options={{ headerShown: false }} />
    </Tabs>
  );
}
