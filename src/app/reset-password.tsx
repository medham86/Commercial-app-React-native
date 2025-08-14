import { ResetPasswordFormData, resetPasswordSchema } from "@/schema/auth";
import Header from "@/shared/Header";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
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
  Modal,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [modalVisiable, setModalVisiable] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    watch,
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
    setIsSubmitted(true);
    setModalVisiable(!modalVisiable);
    setTimeout(() => {
      setIsSubmitted(false);
      // router.push("login");
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

          <View className="mb-5">
            <Text className="font-Poppins-medium mb-5 text-gray-700">
              Password
            </Text>
            <View className="relative">
              <Controller
                control={control}
                name="password1"
                render={({ field: { value, onChange } }) => (
                  <View
                    className={`flex-row items-center border ${
                      errors.password1
                        ? "border-red-500"
                        : value
                        ? "border-green-500"
                        : "border-gray-300"
                    } rounded-lg`}
                  >
                    <TextInput
                     className="flex-1 p-4 font-Poppins align-middle"
                      placeholder="Enter new password"
                      placeholderTextColor={'gray'}
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={!showPassword1}
                    />

                    {value && (
                      <View className="px-2">
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

                    <Pressable
                      className={`pr-5 absolute ${
                        errors.password1 && value ? "right-6" : value ? "right-6" : "right-0"
                      }`}
                      onPress={() => {
                        setShowPassword1(!showPassword1);
                      }}
                    >
                      <Ionicons
                        name={`${!showPassword1 ? "eye-off" : "eye"}`}
                        size={24}
                        color="black"
                      />
                    </Pressable>
                  </View>
                )}
              />
            </View>

            <ErrorMessage
              errors={errors}
              name="password1"
              render={({ message }) => (
                <Text className="text-red-500 font-Poppins mt-2">
                  {message}
                </Text>
              )}
            />
          </View>

          {/*Password 2*/}

          <View className="mb-5">
            <Text className="font-Poppins-medium mb-1 text-gray-700">
              Confirm Password
            </Text>
            <View className="relative">
              <Controller
                control={control}
                name="password2"
                render={({ field: { value, onChange } }) => (
                  <View
                    className={`flex-row items-center border ${
                      errors.password2
                        ? "border-red-500"
                        : value
                        ? "border-green-500"
                        : "border-gray-300"
                    } rounded-lg`}
                  >
                    <TextInput
                      className="flex-1 p-4 font-Poppins align-middle"
                      placeholder="Renter new password"
                      placeholderTextColor={'gray'}
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={!showPassword2}
                    />

                    {value && (
                      <View className="px-2">
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

                    <Pressable
                      className={`pr-5 absolute ${
                        errors.password1 && value ? "right-6" : value ? "right-6" : "right-0"
                      }`}
                      onPress={() => {
                        setShowPassword2(!showPassword2);
                      }}
                    >
                      <Ionicons
                        name={`${!showPassword2 ? "eye-off" : "eye"}`}
                        size={24}
                        color="black"
                      />
                    </Pressable>
                  </View>
                )}
              />
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

          <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisiable}
            onRequestClose={() => {
             
              setModalVisiable(!modalVisiable);
            }}
          >
            <View className=" flex-1 justify-center items-center">
              <View className="gap-5 p-10 mx-3  items-center  bg-white rounded-lg   shadow-gray-200/50 shadow-md ring ">
                <AntDesign name="checkcircle" size={48} color="green" />
                <View>
                  <Text className="font-Poppins-Bold mb-2 text-center text-2xl">
                    Password Changed!
                  </Text>
                  <Text className="text-center font-Poppins text-md">
                    Your can now use your new password 
                    to login to your account.
                  </Text>

                  <TouchableOpacity
                    className="bg-black py-4 font-Poppins rounded-lg mt-5 "
                    onPress={() => router.push("/login")}
                  >
                    <Text className="text-white text-center">Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            className={`${
              isValid ? "bg-primary " : "bg-primary-400"
            } py-4 font-Poppins  rounded-lg mt-3`}
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
