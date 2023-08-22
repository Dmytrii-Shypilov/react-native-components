import { TextInput, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Input = ({ label, onChangeText, placeholder, value, icon, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputField}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor='#ABB3BB'
        />
        {icon}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    maxWidth: 310,
    width: "100%",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    height: 48,
    paddingHorizontal: 22,
    borderRadius: 14,
    backgroundColor: "#fff",
  },
  inputField: {
    flex: 1,
    fontSize: 14,
  },
  label: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 5,
  },
});
