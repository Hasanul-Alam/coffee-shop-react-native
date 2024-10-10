import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

const DividerText = styled(Text);
const Divider = styled(View);

const Register = () => {
  return (
    <View className="w-[90%] mx-auto py-10 flex-1 justify-center">
      {/* Google Sign Up */}
      <View className="flex-row items-center justify-center bg-[#3b6fd1] py-3 rounded-xl">
        <View className="w-[30px] bg-white rounded-full">
          <Image
          className="w-full h-[30px]"
            source={require("@/assets/images/login-icons/googleIcon.png")}
          />
        </View>
        <Text className="text-xl font-semibold text-white ml-5">Sign Up With Google</Text>
      </View>

      {/* Microsoft Sign Up */}
      <View className="flex-row items-center justify-center bg-[#0b1424] py-3 rounded-xl my-3">
        <View className="w-[30px] bg-white rounded-full">
          <Image
          className="w-full h-[30px]"
            source={require("@/assets/images/login-icons/microsoftIcon.png")}
          />
        </View>
        <Text className="text-xl font-semibold text-white ml-5">Sign Up With Microsoft</Text>
      </View>

      {/* Divider */}
      <Divider className="flex-row items-center my-4">
        <Divider className="flex-1 h-0.5 bg-gray-400" />
        <DividerText className="mx-2 text-gray-600 text-lg">OR</DividerText>
        <Divider className="flex-1 h-0.5 bg-gray-400" />
      </Divider>

      {/* Sign Up With Email */}
      <View className="flex-row items-center justify-center bg-[#ed2009] py-3 rounded-xl my-3">
        <View className=" rounded-full">
          <FontAwesome color="#FFFFFF" size={25} name="envelope-o" />
        </View>
        <Text className="text-xl font-semibold text-white ml-5">Sign Up With Email</Text>
      </View>

      {/* Login Link */}
      <Text className="my-2 text-center text-lg">
        Already have an account?{" "}
        <Link href={'https://github.com/Hasanul-Alam'}>
          <Text className="text-blue-600 text-lg">Login</Text>
        </Link>
      </Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
