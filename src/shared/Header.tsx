import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, StyleProp, TextStyle } from "react-native";

const Header = ({
  title,
  description,
  backButton = true,
  titleStyle ={fontFamily:'Poppins-semibold', fontSize:32 },
}: {
  title: string;
  description?: string;
  backButton?: boolean;
  titleStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <View className="flex-col gap-2">
      {backButton && (
        <TouchableOpacity onPress={() => router.back()} className="py-2">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={titleStyle}>{title}</Text>

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
