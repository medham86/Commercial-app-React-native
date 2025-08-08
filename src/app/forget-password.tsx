import { foregtPasswordSchema, ForgetPasswordFormData } from "@/schema/auth";
import Header from "@/shared/Header";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgetPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ForgetPasswordFormData>({
    resolver: zodResolver(foregtPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onsubmit = (data: ForgetPasswordFormData) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-8">
          <Header
            title="Forgot password"
            description="Enter your email for the verification process.
             We will send 4 digits code to your email."
          />

          <View className="mb-16">
            {/* Email */}
            <View className="mb-6">
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
          </View>
          <TouchableOpacity
            className={`${
              isValid ? "bg-primary " : "bg-primary-400"
            } py-4 font-Poppins  rounded-lg `}
            onPress={handleSubmit(onsubmit)}
            disabled={isSubmitted || !isValid}
          >
            <Text className="text-white text-lg text-center  font-Poppins-Bold">
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
