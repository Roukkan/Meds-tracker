import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[300px] h-[300px]"
            resizeMode="contain"
          />

          <Text className="text-2xl text-black text-center font-pbold mt-2">
            A simple app to track your daily meds intake
          </Text>

          <CustomButton
            title="Continue to sign in"
            handlePRess={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
          <Link
            href="/sign-in"
            className="text-lg font-psemibold text-tertiary"
          >
            Sign In
          </Link>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}
