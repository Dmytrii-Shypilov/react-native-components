import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  KeyboardAvoidingView
} from "react-native";
import WelcomeForm from "../components/WelcomeForm";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import VerificationForm from "../components/VerificationForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const AuthorizationScreen = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  // const [animatedOpacity] = useState(() => new Animated.Value(1));
  const animatedOpacity = useRef(new Animated.Value(1)).current

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setIsKeyboardVisible(true);
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      (e) => {
        setIsKeyboardVisible(false);
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/img/auth-background.webp")}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              ...styles.screen,
              justifyContent: isKeyboardVisible ? "flex-end" : "space-between",
            }}
          >
           
            {!isKeyboardVisible && <View style={{flex:1}}>
            <Animated.Image
              style={{ ...styles.image, opacity: animatedOpacity }}
              source={require("../assets/img/logo.png")}
            />
            </View>}
  
            
           {/* <SignInForm/> */}
            {/* <WelcomeForm /> */}
            {/* <SignUpForm/> */}
            {/* <VerificationForm/> */}
            <ForgotPasswordForm/>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.68)",
  },
  image: {
    width: 175,
    height: 37,
    marginTop: '35%'
  },
});

export default AuthorizationScreen;
