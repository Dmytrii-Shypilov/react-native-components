import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

const onPressEffect = ({ pressed }) => {
  return pressed && Platform.OS !== "android"
    ? [styles.button, styles.pressed]
    : styles.button;
};

const Button = ({ children, style, icon }) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable style={onPressEffect} android_ripple={{ color: "#C99986" }}>
        {icon}
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    maxWidth: 310,
    height: 48,
    borderRadius: 14,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C87986",
  },
  text: {
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
    marginLeft: 12,
  },
  pressed: {
    opacity: 0.9,
  },
});
