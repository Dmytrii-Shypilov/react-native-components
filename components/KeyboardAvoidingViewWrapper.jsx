import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";

const KeyboardAvoidingViewWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.wrapper}
    >
      <ScrollView contentContainerStyle={styles.wrapper}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
});

export default KeyboardAvoidingViewWrapper;
