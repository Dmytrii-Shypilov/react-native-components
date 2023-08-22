import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import FormLayout from "./FormLayout";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });

  const inputHandler = (target, value) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [target]: value,
      };
    });
  };

  return (
    <FormLayout title="Sign Up">
      <View style={styles.inputs}>
        <Input
          onChangeText={inputHandler.bind("password")}
          value={formData.password}
          style={styles.input}
          label="password"
          placeholder="Enter your password"
          icon={
            <Ionicons
              name="key-sharp"
              size={20}
              color="rgba(37, 55, 112, 0.50)"
            />
          }
        />
        <Input
          onChangeText={inputHandler.bind("username")}
          value={formData.username}
          label="username"
          placeholder="Enter your email"
          icon={
            <FontAwesome5
              name="user-alt"
              size={18}
              color="rgba(37, 55, 112, 0.50)"
            />
          }
        />
      </View>

      <Button>Sign Up</Button>
    </FormLayout>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  inputs: {
    marginBottom: 50,
  },
  input: {
    marginBottom: 15,
  },
});
