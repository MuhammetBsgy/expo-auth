import { useLocalSearchParams, useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { Button, SafeAreaView, Text } from 'react-native';
import { clearUser } from '~/src/lib/storage';
import { auth } from '~/src/services/firebaseConfig';

const Sekmeler = () => {
  const { name, userEmail } = useLocalSearchParams();
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth);
    clearUser();
    router.replace('/login');
    alert('Çıkış yapıldı.');
  };

  const yazı =
    name && name.length !== 0 ? (
      <Text>Hoşgeldiniz {name}</Text>
    ) : (
      <Text>Hoşgeldiniz {userEmail}</Text>
    );

  return (
    <SafeAreaView>
      {yazı}
      <Button onPress={handleLogout} title="Çıkış Yap" />
    </SafeAreaView>
  );
};

export default Sekmeler;
