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