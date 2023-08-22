import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import WelcomeForm from "../components/WelcomeForm";
import KeyboardAvoidingViewWrapper from "../components/KeyboardAvoidingViewWrapper";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Foundation, AntDesign, FontAwesome } from "@expo/vector-icons";

const TestScreen = () => {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        () => {
          setIsKeyboardVisible(true);
        }
      );
  
      const keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        () => {
          setIsKeyboardVisible(false);
        }
      );
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/img/auth-background.webp")}
        >
          <KeyboardAvoidingView style={{ flex: 1 }} >
            {/* <View style={styles.container}>
              <Text style={styles.title}>Sign In/ Sign Up</Text> */}
              <Input
                label="email"
                placeholder="enter your email"
                icon={
                  <Foundation
                    name="mail"
                    size={22}
                    color="rgba(37, 55, 112, 0.50)"
                  />
                }
              />
              {/* <Button>Sign in / Sign up</Button>
              <Button icon={<AntDesign name="google" size={20} color="#fff" />}>
                Google
              </Button>
              <Button
                icon={<FontAwesome name="facebook-f" size={20} color="#fff" />}
              >
                Facebook
              </Button> */}
            {/* </View> */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  };
  
  

const styles = StyleSheet.create({
  background: {
  flex: 1,
  width: '100%'
  },
  screen: {
    width: '100%',
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.68)",
  },
  image: {
    width: 175,
    height: 37,
    marginTop: 160,
  },
});

export default TestScreen;
