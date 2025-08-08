import { ResetPasswordFormData, resetPasswordSchema } from "@/schema/auth";
import Header from "@/shared/Header";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password1: "",
      password2: "",
    },
    mode: "onChange",
  });

  // handlers
  const onSubmit = (data: ResetPasswordFormData) => {
    if (data.password1 !== data.password2) return;

    setIsSubmitted(true);
    console.log(data);
    setTimeout(() => {
      setIsSubmitted(false);
      router.push("login");
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-8">
          <Header
            title="Reset Password"
            description="Set the new password for your account so you can login and access all the features."
          />

          {/*Password 1*/}

          <View className=" mb-5">
            <Text className="font-Poppins-medium mb-2 text-gray-700">
              Password
            </Text>
            <View className="relative">
              <Controller
                control={control}
                name="password1"
                render={({ field: { value, onChange } }) => (
                  <View>
                    <TextInput
                      className={`border ${
                        errors.password1
                          ? "border-red-500"
                          : value
                          ? "border-green-500"
                          : "border-gray-300"
                      } rounded-lg p-4 font-Poppins pr-10`}
                      placeholder="Password"
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={!showPassword1}
                    />

                    {value && (
                      <View className="absolute right-3 top-3 ">
                        {errors.password1 ? (
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

              <Pressable
                className={`top-3 right-6 absolute pr-4`}
                onPress={() => {
                  setShowPassword1(!showPassword1);
                }}
              >
                {!showPassword1 ? (
                  <Ionicons name="eye-off" size={24} color="black" />
                ) : (
                  <Ionicons name="eye" size={24} color="black" />
                )}
              </Pressable>
            </View>

            <ErrorMessage
              errors={errors}
              name="password1"
              render={({ message }) => (
                <Text className="text-red-500 font-Poppins mt-1">
                  {message}
                </Text>
              )}
            />
          </View>

          {/*Password 2*/}

          <View className=" mb-5">
            <Text className="font-Poppins-medium mb-2 text-gray-700">
              Password
            </Text>
            <View className="relative">
              <Controller
                control={control}
                name="password2"
                render={({ field: { value, onChange } }) => (
                  <View>
                    <TextInput
                      className={`border ${
                        errors.password2
                          ? "border-red-500"
                          : value
                          ? "border-green-500"
                          : "border-gray-300"
                      } rounded-lg p-4 font-Poppins pr-10`}
                      placeholder="Password"
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={!showPassword2}
                    />

                    {value && (
                      <View className="absolute right-3 top-3 ">
                        {errors.password2 ? (
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

              <Pressable
                className={`top-3 right-6 absolute pr-4`}
                onPress={() => {
                  setShowPassword2(!showPassword2);
                }}
              >
                {!showPassword2 ? (
                  <Ionicons name="eye-off" size={24} color="black" />
                ) : (
                  <Ionicons name="eye" size={24} color="black" />
                )}
              </Pressable>
            </View>

            <ErrorMessage
              errors={errors}
              name="password2"
              render={({ message }) => (
                <Text className="text-red-500 font-Poppins mt-1">
                  {message}
                </Text>
              )}
            />
          </View>

          <TouchableOpacity
            className={`${
              isValid ? "bg-primary " : "bg-primary-400"
            } py-4 font-Poppins  rounded-lg `}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitted || !isValid}
          >
            <Text className="text-white text-lg text-center  font-Poppins-Bold">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
