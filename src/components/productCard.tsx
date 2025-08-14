import { Product } from "@/interfaces/product";
import { formatCurrency } from "@/lib/formatters";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <View className="mb-4 w-44">
      <TouchableOpacity className="relative">
        <Image source={product.imageURL} className="h-48 w-full rounded-t-lg" />
        <TouchableOpacity className="absolute right-2 top-2 rounded-md bg-white p-2">
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-Poppins-Bold text-sm">{product.name}</Text>
        <Text className="font-Poppins-Regular text-sm">
          {formatCurrency(product.price)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
