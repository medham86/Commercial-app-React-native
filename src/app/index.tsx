import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SignUp from "./signup";
import { Link } from "expo-router";
import Header from "@/shared/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Category } from "@/interfaces/category";
import { categorylist } from "@/data/categories";
import { products } from "@/data/products";
import { Image } from "expo-image";
import ProductCard from "@/components/productCard";

export default function Page() {
  const [categoryList, setCategoryList] = useState<Category[]>(categorylist);

  const handleCategoryPress = (id: string) => {
    setCategoryList(
      categoryList.map((category) => ({
        ...category,
        active: category.id === id,
      })),
    );
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1 p-6">
          <View className="flex-1 flex-row items-center justify-between">
            <Header
              title="Discover"
              backButton={false}
              titleStyle={{ fontFamily: "Poppins-semibold", fontSize: 32 }}
            />
            <Ionicons name="notifications-outline" size={28} color="black" />
          </View>
          <View className="my-4 flex-row">
            <TouchableOpacity className="mr-2 flex-1 flex-row items-center rounded-lg border border-primary-400 p-3">
              <AntDesign name="search1" size={24} color="gray" />
              <TextInput
                placeholderTextColor={"gray"}
                placeholder="Search for clothes..."
                className="ml-2 flex-1 font-Poppins text-lg"
              />
              <Ionicons name="mic-outline" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity className="items-center justify-center rounded-lg bg-black p-3">
              <Ionicons name="filter" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row flex-wrap gap-2">
              {categoryList.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  className={`rounded-lg ${cat.active ? "bg-black" : "bg-white"} border border-primary-100 px-4 py-2`}
                  onPress={() => handleCategoryPress(cat.id)}
                >
                  <Text
                    className={`text-center font-Poppins-SemiBold text-lg ${cat.active ? "text-white" : "text-black"}`}
                  >
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* productList */}

          <View className="mt-8 flex-row flex-wrap justify-between gap-4">
            {products.map((product) => (
              <View key={product.id}>
                <ProductCard product={product} />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

{
  /* <Link href='/signup'>signup</Link>
             <Link href='/login'>login</Link>
             <Link href='/forget-password'>ForgetPassword</Link>
             <Link href='/verify-code'>Verification-Code</Link>
             <Link href='/reset-password'>Reset-password</Link>  */
}
