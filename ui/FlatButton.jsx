import { Pressable, Text, View, StyleSheet } from "react-native";

const FlatButton = ({ children, onPress, style }) => {
  return (
    <Pressable style={({pressed})=> [styles.button, pressed && styles.pressed, style]} onPress={onPress}>
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default FlatButton



const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
    },
    pressed: {
        opacity: 0.7,
    },
    text: {
        fontSize: 14,
        color: '#F6A9A7'
    }
})