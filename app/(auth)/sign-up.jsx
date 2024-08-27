import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
// import { ScrollView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

import { SelectList } from "react-native-dropdown-select-list";

const signUp = () => {
  const [selected, setSelected] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const data = [
    { key: "1", value: "Family" },
    { key: "2", value: "Caregiver / Nurse" },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};
  return (
    <ScrollView contentContainerStyle={{ height: "100%" }} className="mt-10">
      <View className="bg-white h-full">
        <ScrollView>
          <View className="w-full items-center justify-center min-h-[83vh] px-4 my-6">
            <Image
              source={images.logo}
              className="w-[200px] h-[200px]"
              resizeMode="contain"
            />

            <Text className="text-2xl text-black text-center text-semibold mt-10 font-psemibold">
              Sign up to MedTrack
            </Text>

            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-7"
            />

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />

            <FormField
              title="Role"
              value={form.role}
              handleChangeText={(e) => setForm({ ...form, role: e })}
              otherStyles="mt-7 hidden"
            />

            <Text className="text-base text-gray-100 font-pmedium mt-7 w-full">
              Role
            </Text>
            <SelectList
              setSelected={(val) => setForm({ ...form, role: val })}
              data={data}
              save="value"
              placeholder="Select a role"
              searchPlaceholder="Search roles..."
              boxStyles={{
                borderWidth: 0,
                borderRadius: 10,
                marginTop: 10,
                width: "100%",
                backgroundColor: "#e5e7eb",
              }}
              inputStyles={{ paddingHorizontal: 16, paddingVertical: 10 }}
              dropdownStyles={{ maxHeight: 150 }}
              dropdownItemStyles={{ paddingVertical: 10 }}
              dropdownTextStyles={{ fontSize: 16 }}
            />

            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles="mt-7 w-full"
              isLoading={isSubmitting}
            />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-black-100 font-pregular">
                Already have an account?
              </Text>
              <Link
                href="/sign-in"
                className="text-lg font-psemibold text-tertiary"
              >
                Sign In
              </Link>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default signUp;
