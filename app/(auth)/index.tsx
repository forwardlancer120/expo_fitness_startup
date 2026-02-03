import SocialButton from "@/components/ui/social-button";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoWrap}>
            <Text style={styles.logoText}>FITNESS EXPO</Text>
            <View style={styles.logoUnderline} />
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <Text style={styles.title}>Sign In or Sign Up</Text>
          <Text style={styles.subtitle}>
            Manage your schedule & explore the expo!
          </Text>

          <SocialButton
            icon={<Ionicons name="mail" size={20} color="#fff" />}
            text="Sign In with Email"
            backgroundColor="#F47A20"
            onPress={() => router.push("/signin")}
          />

          <SocialButton
            icon={<AntDesign name="google" size={20} color="#fff" />}
            text="Continue with Google"
            backgroundColor="#2D6CC4"
          />

          <SocialButton
            icon={<FontAwesome name="facebook" size={20} color="#fff" />}
            text="Continue with Facebook"
            backgroundColor="#365899"
          />

          <SocialButton
            icon={<AntDesign name="apple" size={20} color="#fff" />}
            text="Continue with Apple"
            backgroundColor="#1F2A37"
          />

          <Text style={styles.or}>or</Text>

          <TouchableOpacity style={styles.qrBtn}>
            <Ionicons name="qr-code-outline" size={22} color="#2D6CC4" />
            <Text style={styles.qrText}>Scan Ticket QR Code</Text>
          </TouchableOpacity>

          <Text style={styles.terms}>
            By signing up, you agree to the{" "}
            <Text style={styles.link}>Terms of Service</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F4E79",
  },
  safe: {
    flex: 1,
  },

  /* HEADER */
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  logoWrap: {
    alignItems: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: 2,
  },

  logoUnderline: {
    marginTop: 6,
    height: 4,
    width: 240,
    backgroundColor: "#F47A20",
    borderRadius: 2,
  },

  /* CONTENT (curved white sheet) */
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    paddingHorizontal: 24,
    paddingTop: 32,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#1A2A3A",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#6B7C93",
    marginBottom: 24,
  },

  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 14,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  socialText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  or: {
    textAlign: "center",
    marginVertical: 16,
    color: "#6B7C93",
  },

  qrBtn: {
    borderWidth: 1.5,
    borderColor: "#D6E1EF",
    borderRadius: 12,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  qrText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2D6CC4",
  },

  terms: {
    fontSize: 12,
    textAlign: "center",
    color: "#7A8A9A",
    marginTop: 22,
    lineHeight: 18,
    paddingHorizontal: 10,
  },
  link: {
    color: "#2D6CC4",
    fontWeight: "600",
  },
});
