import { LoginFormData, loginSchema } from "@/schema/auth";
import Header from "@/shared/Header";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  // handlers

  const onsubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-8">
          <Header
            title="Login to your account"
            description="It’s great to see you again."
          />
          <View className="mb-6">
            {/* Email */}
            <View className="mb-5">
              <Text className="font-poppins mb-2 text-gray-700">Email</Text>
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                  <View className="relative">
                    <TextInput
                      className={`border ${
                        errors.email
                          ? "border-red-500"
                          : value
                          ? "border-green-500"
                          : "border-gray-300"
                      } rounded-lg p-3 font-Poppins pr-10`}
                      placeholder="Enter your email address"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={value}
                      onChangeText={onChange}
                    />
                    {value && (
                      <View className="absolute right-3 top-3">
                        {errors.email ? (
                          <Feather name="alert-circle" size={24} color="red" />
                        ) : (
                          <FontAwesome5
                            name="check-circle"
                            size={24}
                            color="green"
                          />
                        )}
                      </View>
                    )}
                  </View>
                )}
              />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <Text className="text-red font-Poppins mt-2">{message}</Text>
                )}
              />
            </View>

            <View className=" mb-5">
              <Text className="font-Poppins-medium mb-2 text-gray-700">
                Password
              </Text>
              <View className="relative">
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { value, onChange } }) => (
                    <View>
                      <TextInput
                        className={`border ${
                          errors.password
                            ? "border-red-500"
                            : value
                            ? "border-green-500"
                            : "border-gray-300"
                        } rounded-lg p-3 font-Poppins pr-10`}
                        placeholder="Password"
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={!showPassword}
                      />
                      {value && (
                        <View className="absolute right-3 top-3 ">
                          {errors.password ? (
                            <Feather
                              name="alert-circle"
                              size={24}
                              color="red"
                            />
                          ) : (
                            <FontAwesome5
                              name="check-circle"
                              size={24}
                              color="green"
                            />
                          )}
                        </View>
                      )}
                    </View>
                  )}
                />

                <Pressable
                  className={`top-3 right-6 absolute pr-4`}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {!showPassword ? (
                    <Ionicons name="eye-off" size={24} color="black" />
                  ) : (
                    <Ionicons name="eye" size={24} color="black" />
                  )}
                </Pressable>
              </View>

              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <Text className="text-red-500 font-Poppins mt-2">
                    {message}
                  </Text>
                )}
              />
            </View>
          </View>
          <View className="mb-5 flex-row mx-auto">
            <Text className="font-Poppins">Forgot your password? </Text>
            <Link href={"/forget-password"} className="underline font-Poppins">
              Forget your password
            </Link>
          </View>
          <TouchableOpacity
            className={`${
              isValid ? "bg-primary " : "bg-primary-400"
            } py-4 font-Poppins  rounded-lg `}
            onPress={handleSubmit(onsubmit)}
            disabled={isSubmitted || !isValid}
          >
            <Text className="text-white text-lg text-center  font-Poppins-Bold">
              Login
            </Text>
          </TouchableOpacity>
          {/* Divider*/}
          <View className="flex flex-row items-center gap-5 my-5">
            <View className="flex-1 h-0.5 bg-slate-300" />
            <View>
              <Text className="w-50 ">Or</Text>
            </View>
            <View className="flex-1 h-0.5 bg-slate-300" />
          </View>
          {/* Social signup buttons*/}
          <View>
            <TouchableOpacity className="bg-primary-100 mb-4  py-4 rounded-lg ">
              <View className="flex flex-row items-center gap-3 mx-auto">
                <Ionicons name="logo-google" size={24} color="" />
                <Text className="font-Poppins">Sign Up with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-secondary mb-4  py-4 rounded-lg ">
              <View className="flex flex-row items-center gap-3 mx-auto">
                <FontAwesome5 name="facebook" size={24} color="white" />
                <Text className="text-white font-Poppins">
                  Sign Up with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* register links*/}
          <View className="flex flex-row items-center gap-2 mx-auto">
            <Text className="font-Poppins text-primary-600">
              Don’t have an account?
            </Text>
            <TouchableOpacity>
              <Link
                href="/signup"
                className="font-Poppins text-primary underline"
              >
                Join
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
});
