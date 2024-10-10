import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";

const DividerText = styled(Text);
const Divider = styled(View);

const Login = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-[90%] mx-auto py-5">
        <Text className="text-3xl my-5 text-center font-semibold">Login With...</Text>
        <View className="flex-row justify-between">
          <View className="w-[22%] border border-1 border-gray-400 rounded-lg py-1 px-3">
            <Image
              className="w-full h-[45px]"
              source={require("@/assets/images/login-icons/googleIcon.png")}
            ></Image>
            <Text className="text-center">Google</Text>
          </View>
          <View className="w-[22%] border border-1 border-gray-400 rounded-lg py-1 px-2">
            <Image
              className="w-full h-[45px]"
              source={require("@/assets/images/login-icons/microsoftIcon.png")}
            ></Image>
            <Text className="text-center">Microsoft</Text>
          </View>
          <View className="w-[22%] border border-1 border-gray-400 rounded-lg py-1 px-2">
            <Image
              className="w-full h-[45px]"
              source={require("@/assets/images/login-icons/facebookIcon.png")}
            ></Image>
            <Text className="text-center">Facebook</Text>
          </View>
          <View className="w-[22%] border border-1 border-gray-400 rounded-lg py-1 px-3">
            <Image
              className="w-full h-[45px]"
              source={require("@/assets/images/login-icons/appleIcon.png")}
            ></Image>
            <Text className="text-center">Apple</Text>
          </View>
        </View>

        {/* Divider */}
        <Divider className="flex-row items-center my-4">
          <Divider className="flex-1 h-0.5 bg-gray-400" />
          <DividerText className="mx-2 text-gray-600 text-lg">OR</DividerText>
          <Divider className="flex-1 h-0.5 bg-gray-400" />
        </Divider>

        {/* Login Form */}
        {/* Email Field */}
        <View>
          <Text className="text-lg mb-1">Username or Email</Text>
          <TextInput
            className="border border-1 px-2 py-2 rounded-lg"
            placeholder="Username or Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {/* Password Field */}
        <View className="my-1">
          <Text className="text-lg mb-1">Password</Text>
          <TextInput
            className="border border-1 px-2 py-2 rounded-lg"
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        {/* Login Button */}
        <View className="mt-5">
          <Text className="w-full bg-[#71db40] text-center text-slate-600 text-xl py-2 rounded-lg font-semibold">
            Login
          </Text>
        </View>

        {/* Sign Up Link */}
        <Text className="my-2 text-center">
          Don't have an account?{" "}
          <Link href={"https://github.com/Hasanul-Alam"}>
            <Text className="text-blue-600">Sign Up</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
