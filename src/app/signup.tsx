import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { SignupFormData, signupSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Header from "@/shared/Header";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // handlers
  const onSubmit = (data: SignupFormData) => {
    setIsSubmitted(true);
    console.log(data);
    setTimeout(() => {
      setIsSubmitted(false);
      router.push("/");
    }, 1000);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-8">
          <Header
            title="Create an account"
            description="Let’s create your account."
          />

          {/* Full Name Input */}
          <View className="mb-5">
            <Text className="font-Poppins-medium mb-2 text-gray-700">
              Full Name
            </Text>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, value } }) => (
                <View className="relative">
                  <TextInput
                    className={`border ${
                      errors.fullName
                        ? "border-red-500"
                        : value
                        ? "border-green-500"
                        : "border-gray-300"
                    } rounded-lg p-4 font-Poppins pr-10`}
                    placeholder="Enter your full name"
                    value={value}
                    onChangeText={onChange}
                  />
                  {value && (
                    <View className="absolute right-3 top-4">
                      {errors.fullName ? (
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
              name="fullName"
              render={({ message }) => (
                <Text className="text-red-500 font-Poppins mt-1">
                  {message}
                </Text>
              )}
            />
          </View>

          <View className="mb-5">
            <Text className="font-Poppins mb-2 text-gray-700">Email</Text>
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
                    } rounded-lg p-4 font-Poppins pr-10`}
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
                <Text className="text-red-500 font-Poppins mt-1">
                  {message}
                </Text>
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
                      } rounded-lg p-4 font-Poppins pr-10`}
                      placeholder="Password"
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={!showPassword}
                    />

                    {value && (
                      <View className="absolute right-0 top-3 px-2 ">
                        {errors.password ? (
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

                    <Pressable
                      className={`pr-4 ${value && !isValid ? 'right-6' : 'right-0'} top-3 absolute `}
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
                )}
              />
            </View>

            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <Text className="text-red-500 font-Poppins mt-1">
                  {message}
                </Text>
              )}
            />
          </View>

          <View className="mb-6">
            <Text className="font-Poppins text-sm my-2 text-primary-600">
              By signing up you agree to our Terms, Privacy Policy, and Cookie
              Use
            </Text>
          </View>
          <TouchableOpacity
            className={`${
              isValid ? "bg-primary-400" : "bg-primary-200"
            } py-4  rounded-lg `}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitted || !isValid}
          >
            <Text className="text-center text-white font-Poppins">
              Create an Account
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
                <Text className="text-white">Sign Up with Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Login links*/}
          <View className="flex flex-row items-center gap-2 mx-auto">
            <Text className="font-Poppins text-primary-600">
              Already have an account ?
            </Text>
            <TouchableOpacity>
              <Link
                href="/login"
                className="font-Poppins text-primary underline"
              >
                <Text>Log In</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {},
});
