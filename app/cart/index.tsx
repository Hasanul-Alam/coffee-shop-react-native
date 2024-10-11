import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Cart = () => {
  return (
    <View className="flex-1 py-32 w-[90%] mx-auto">
      {/* Cart Container */}
      <View className="cart-container relative w-full h-[100px]">
        <View className="absolute top-0 left-0 flex flex-row gap-5">
          {/* Cart Image */}
          <View className="w-[100px]">
            <Image
              className="w-full h-[100px] rounded-lg"
              source={require("@/assets/images/shopImages/productImage.jpg")}
            ></Image>
          </View>
          <View>
            <Text className="font-semibold">Cappuccino</Text>
            <Text className="text-lg font-semibold">$12.50</Text>
          </View>
        </View>
        {/* Delete Button */}
        <View className="absolute bottom-0 right-0 bg-gray-300 w-[45px] h-[45px] rounded-full flex justify-center items-center">
          <FontAwesome name="trash" size={25} />
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
