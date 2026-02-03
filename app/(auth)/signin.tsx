import { useForm } from "@/hooks/use-form";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignInScreen: React.FC = () => {
  const router = useRouter();
  const { values, errors, handleChange, handleSubmit, setErrors } = useForm({
    email: "",
    password: "",
  });

  const onSignIn = () => {
    const { email, password } = values;
    const newErrors: any = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Sign In values:", values);
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={values.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={values.password}
        onChangeText={(text) => handleChange("password", text)}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit(onSignIn)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
        <Text style={styles.signupText}>
          Don&apos;t have an account?{" "}
          <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2E86AB",
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    color: "#2E86AB",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2E86AB",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  error: { color: "red", marginBottom: 5 },
  signupText: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    marginTop: 10,
  },
  signupLink: { color: "#2E86AB", fontWeight: "bold" },
});
