import { useRouter } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const login = () => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  const handleRegister = () => {
    router.replace('/signUp');
  };
  const handleLogin = () => {
    router.replace('/signIn');
  };

  return (
    <View>
      <ImageBackground className="h-full w-full gap-2" source={require('assets/main.avif')}>
        <View className="bottom-16 h-full justify-end" style={{ paddingTop: top }}>
          <View className="items-center gap-6">
            <View className="items-center">
              <Text className="text-3xl font-bold text-white">Start You Shopping</Text>
              <Text className="text-3xl font-bold text-white">Journey Now</Text>
            </View>

            <View>
              <Text className="px-16 text-white">Lorem ipsum dolor sit amet consectetur</Text>
              <Text className="px-16 text-white">adipisicing elit. Earum reprehenderit.</Text>
            </View>

            <View className="w-full items-center gap-4">
              <TouchableOpacity
                onPress={handleLogin}
                className="h-16 w-[80%] items-center justify-center rounded-xl border-[1px] border-[#DFA267]">
                <Text className="font-semibold text-[#DFA267]">Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleRegister}
                className="h-16 w-[80%] items-center justify-center rounded-xl bg-[#DFA267]">
                <Text className="font-semibold text-white">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default login;
