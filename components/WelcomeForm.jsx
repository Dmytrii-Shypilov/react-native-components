import { View, Text, StyleSheet } from "react-native";
import { Foundation, AntDesign, FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Button from "../ui/Button";
import FlatButton from "../ui/FlatButton";
import Input from "../ui/Input";
import FormLayout from "./FormLayout";
import { useState } from "react";

const WelcomeForm = () => {
  const [email, setEmail] = useState('')

  const inputHandler = (value) => {
    setEmail(value)
  }

  return (
    <FormLayout style={styles.form} title={"Sign In/ Sign Up"}>
        <Input
        onChangeText={inputHandler}
        value={email}
          label="email"
          placeholder="enter your email"
          icon={
            <Foundation name="mail" size={22} color="rgba(37, 55, 112, 0.50)" />
          }
        />
        <FlatButton>Have an Invite Code?</FlatButton>
        <View style={styles.buttonsContainer}>
          <Button>Sign in / Sign up</Button>
          <Button
            style={styles.button}
            icon={<AntDesign name="google" size={20} color="#fff" />}
          >
            Google
          </Button>
          <Button
            style={styles.button}
            icon={<FontAwesome name="facebook-f" size={20} color="#fff" />}
          >
            Facebook
          </Button>
        </View>
    </FormLayout>
  );
};

export default WelcomeForm;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 10 
  },
  button: {
    marginTop: 20,
  },
});
