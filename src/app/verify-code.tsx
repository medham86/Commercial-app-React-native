import {
  foregtPasswordSchema,
  ForgetPasswordFormData,
  
} from "@/schema/auth";
import Header from "@/shared/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VerifyCode = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const keypress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  const handleSubmit = () => {
    if (!isCodeComplete) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      router.push("/reset-password");
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-8">
          <Header
            title="Enter 4 Digit Code"
            description="Enter 4 digit code that your receive on your email (cody.fisher45@example.com)."
          />

          <View className="mt-16">
            <View className="flex flex-row mx-auto gap-3 ">
              {Array.from({ length: 4 }).map((_, index) => (
                <TextInput
                  key={index}
                  className="border border-gray-300 w-[72px] h-[72px] p-4 rounded-lg text-center text-2xl"
                  keyboardType="numeric"
                  maxLength={1}
                  value={code[index]}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(event) => keypress(event, index)}
                  ref={(el) => {
                    if (el) {
                      inputRefs.current[index] = el;
                    }
                  }}
                />
              ))}
            </View>
          </View>
          <View className="my-5 flex-row mx-auto">
            <Text className="font-Poppins">Email not received? </Text>
            <Link href={"/forget-password"} className="underline font-Poppins">
              Resend code
            </Link>
          </View>
          <TouchableOpacity
            className={`${
              isCodeComplete ? "bg-primary " : "bg-primary-400"
            } py-4 font-Poppins  rounded-lg `}
            onPress={handleSubmit}
            disabled={isSubmitted || !isCodeComplete}
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

export default VerifyCode;
