import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { saveUser } from '~/src/lib/storage';
import { auth } from '~/src/services/firebaseConfig';

const signUp = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace('/signIn');
  };

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        saveUser(user.uid);
        const name = username;
        alert(user.email + ' ' + 'Kayıt yaptı');
        router.replace({
          params: { name },
          pathname: '/tabs/tabsMain',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ' ' + errorMessage);
      });
  };

  return (
    <View style={{ paddingTop: top }} className="flex-1 bg-white">
      <View className="flex-1 gap-2 px-12" style={{ paddingTop: top }}>
        <Text className="text-3xl font-bold text-black">Sign Up</Text>
        <View>
          <Text>Create an account so you can order you</Text>
          <Text>favorite products easily and quickly</Text>
        </View>
        <View className="top-10 w-full gap-6">
          <TextInput
            value={username}
            onChangeText={setUserName}
            autoCapitalize="words"
            className="h-20 w-full rounded-xl bg-[#F6F5FA] px-8"
            placeholder="Username"
          />
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
          <TouchableOpacity
            onPress={handleRegister}
            className="h-20 w-full items-center justify-center rounded-xl bg-[#DFA267] px-8">
            <Text className="text-lg font-semibold text-white">Register Now</Text>
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
          <View className="top-7 h-60 flex-row items-center gap-1 self-center">
            <Text className="text-black">Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin} className="flex-row items-center">
              <Text className="text-[#CBA479]">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default signUp;
