import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Header = ({
  title,
  description,
}: {
  title: string,
  description: string
}) => {
  return (
    <View className="flex-col gap-2">
      <TouchableOpacity onPress={() => router.back()} className="py-2">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-3xl font-Poppins-bold mb-2">{title}</Text>

      {description && (
        <Text className="text-gray-500 font-Poppins mb-8">{description}</Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
});
