import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { styled } from "nativewind";

const StyledView = styled(View);

const Footer = () => {
  return (
    <View className="w-[90%] mx-auto py-3">
      <View className="flex-row gap-4 justify-center">
        <StyledView className="bg-[#563803] p-2 rounded-full">
          <Text className="text-white">
            <FontAwesome size={20} name="youtube-play" />
          </Text>
        </StyledView>
        <StyledView className="bg-[#563803] p-2 rounded-full px-[9px]">
          <Text className="text-white">
            <FontAwesome size={20} name="twitter" />
          </Text>
        </StyledView>
        <StyledView className="bg-[#563803] p-2 rounded-full px-[9px]">
          <Text className="text-white">
            <FontAwesome size={20} name="linkedin" />
          </Text>
        </StyledView>
        <StyledView className="bg-[#563803] p-2 rounded-full px-[12px]">
          <Text className="text-white">
            <FontAwesome size={20} name="facebook" />
          </Text>
        </StyledView>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
