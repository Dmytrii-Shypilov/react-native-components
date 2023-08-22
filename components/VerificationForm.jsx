import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import Button from "../ui/Button";
import Input from "../ui/Input";
import FormLayout from "./FormLayout";
import { useState } from 'react';

const VerificationForm = () => {
  const [code, setCode] = useState('')

const inputHandler = (value) => {
  setCode(value)
}

  return (
    <FormLayout title="Verification code">
        <Input onChangeText={inputHandler} value={code} label="code" placeholder="Enter Verifictaion Code" icon={<MaterialIcons name="verified-user" size={24} color="rgba(37, 55, 112, 0.50)" />} />
        <Button style={styles.button}>Verify</Button>
    </FormLayout>
  );
};

export default VerificationForm;

const styles = StyleSheet.create({
    button: {
        marginTop: 40,
    }
})
