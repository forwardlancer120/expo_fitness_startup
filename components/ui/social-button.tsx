import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SocialButtonProps = {
  icon: ReactNode;
  text: string;
  backgroundColor: string;
  onPress?: () => void;
};

const SocialButton = ({
  icon,
  text,
  backgroundColor,
  onPress,
}: SocialButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.socialBtn, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* Left pinned icon */}
      <View style={styles.icon}>{icon}</View>

      {/* Truly centered text */}
      <Text style={styles.socialText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialBtn: {
    height: 52,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    flexDirection: "row",
  },

  icon: {
    right: 5,
  },

  socialText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SocialButton;
