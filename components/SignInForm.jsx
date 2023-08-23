import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Button from "../ui/Button";
import FlatButton from "../ui/FlatButton";
import Input from "../ui/Input";
import FormLayout from "./FormLayout";
import { useState } from "react";

const SignInForm = ({setCurrentForm}) => {
const [password, setPassword] = useState('')

const inputHandler = (value) => {
  setPassword(value)
}

  return (
    <FormLayout title="Enter Password">
        <Input value={password} label="password" placeholder="Enter your password" icon={<Ionicons name="key-sharp" size={22} color="rgba(37, 55, 112, 0.50)" />} />
        <FlatButton onPress={()=> setCurrentForm("forgotPassword")}>Forgot password</FlatButton>
        <Button style={styles.button}>Sign In</Button>
    </FormLayout>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    }
})
