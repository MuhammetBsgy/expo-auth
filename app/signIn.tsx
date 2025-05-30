import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { saveUser } from '~/src/lib/storage';
import { auth } from '~/src/services/firebaseConfig';

const signIn = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        saveUser(user.uid);
        alert(user.email + ' ' + 'Giriş yapıldı');
        const userEmail = user.email;
        router.replace({
          pathname: '/tabs/tabsMain',
          params: { userEmail },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ' ' + errorMessage);
      });
  };

  const handleJoin = () => {
    router.replace('/signUp');
  };

  return (
    <View style={{ paddingTop: top }} className="flex-1 bg-white">
      <View className="flex-1 gap-2 px-12" style={{ paddingTop: top }}>
        <Text className="text-3xl font-bold text-black">Welcome Back!</Text>
        <Text>Sign in to your account</Text>

        <View className="top-10 w-full gap-6">
          <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            className="h-20 w-full rounded-xl bg-[#F6F5FA] px-8"
            placeholder="Email"
          />
          <View>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              className="h-20 w-full rounded-xl bg-[#F6F5FA] px-8"
              placeholder="Password"
            />
            <Pressable
              onPress={() => setShowPassword((priv) => !priv)}
              className="absolute right-8 top-6">
              <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
            </Pressable>
          </View>
          <Text className="self-end">Forgot Password?</Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="h-20 w-full items-center justify-center rounded-xl bg-[#DFA267] px-8">
            <Text className="text-lg font-semibold text-white">signIn</Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-center gap-4">
            <View className="h-px w-[30%] bg-[#C4C4C4]" />
            <Text className="text-[#C4C4C4]">Or Continue With</Text>
            <View className="h-px w-[30%] bg-[#C4C4C4]" />
          </View>
          <View className="flex-row items-center justify-center gap-4">
            <TouchableOpacity
              style={{ height: 50 }}
              className="w-[55%] items-center justify-center rounded-xl bg-[#BE3D4C] px-8">
              <AntDesign name="google" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ height: 50 }}
              className="h-18 w-[55%] items-center justify-center rounded-xl bg-[#4966AB] px-8">
              <EvilIcons name="sc-facebook" size={35} color="white" />
            </TouchableOpacity>
          </View>
          <View className="h-[50%] flex-row items-center gap-1 self-center">
            <Text className="text-black">Not A Member?</Text>
            <TouchableOpacity onPress={handleJoin}>
              <Text className="text-[#CBA479]">Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default signIn;
