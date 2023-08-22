import { BlurView } from "expo-blur";
import { View, Text, StyleSheet } from "react-native";
import KeyboardAvoidingViewWrapper from "./KeyboardAvoidingViewWrapper";

const FormLayout = ({ children, style, title }) => {
  return (
    <KeyboardAvoidingViewWrapper>
      <BlurView intensity={60} style={[styles.formContainer, style]}>
        <View style={styles.form}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </BlurView>
    </KeyboardAvoidingViewWrapper>
  );
};

export default FormLayout;

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 40,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(217, 217, 217, 0.8)",
  },
  form: {
    width: "100%",
    maxWidth: 310,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 10,
  },
});
