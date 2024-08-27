import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <View className={containerStyles}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-tertiary text-white rounded-xl min-h-[62px] items-center justify-center ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
      >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const CustomButton2 = ({ title, handlePress, containerStyle }) => {
  return (
    <TouchableOpacity className="bg-tertiary text-white rounded-xl min-h-[62px] items-center justify-center">
      <Text className="text-white font-psemibold text-lg">Track Meds</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
