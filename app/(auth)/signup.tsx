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

const SignUpScreen: React.FC = () => {
  const router = useRouter();
  const { values, errors, handleChange, handleSubmit, setErrors } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSignUp = () => {
    const { name, email, password, confirmPassword } = values;
    const newErrors: any = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("SignUp values:", values);
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={values.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={values.confirmPassword}
        onChangeText={(text) => handleChange("confirmPassword", text)}
      />
      {errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit(onSignUp)}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/signin")}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f6f8",
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
  loginText: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    marginTop: 10,
  },
  loginLink: { color: "#2E86AB", fontWeight: "bold" },
});
