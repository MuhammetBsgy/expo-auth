import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { getUser } from '~/src/lib/storage';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    getUser().then((user) => {
      if (user) {
        router.replace('./tabs/tabsMain');
      } else {
        router.replace('/login');
      }
    });
  }, []);

  return null;
};

export default Index;
