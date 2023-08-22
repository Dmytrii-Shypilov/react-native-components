import {Foundation } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import Button from "../ui/Button";
import Input from "../ui/Input";
import FormLayout from "./FormLayout";
import { useState } from 'react';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('')

    const inputHandler = (value) => {
        setEmail(value)
    }

  return (
    <FormLayout title="Forgot password">
        <Input vlaue={email} onChangeText={inputHandler} label="email" placeholder="Enter your email" icon={<Foundation name="mail" size={22} color="rgba(37, 55, 112, 0.50)" />} />
        <Button style={styles.button}>Confirm</Button>
    </FormLayout>
  );
};

export default ForgotPasswordForm;

const styles = StyleSheet.create({
    button: {
        marginTop: 40,
    }
})
