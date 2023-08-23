import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Input from "./ui/Input";
import Button from "./ui/Button";
import AuthorizationScreen from "./screens/AuthorizationScreen";
import TestScreen from "./screens/TestScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        source={require("./assets/img/auth-background.webp")}
      >
        <KeyboardAvoidingView>
          <View>
            <TextInput
              style={{ height: 15, width: 200, backgroundColor: "#fff" }}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Input label={'name'} placeholder={'This is a placeholder'}/>
      <Button>Press me</Button> */}
      <AuthorizationScreen/>
      {/* <TestScreen/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
