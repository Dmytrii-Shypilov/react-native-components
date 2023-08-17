import { TextInput, View, Text } from "react-native";


const Input = ({label, onChangeText}) => {
    return (
<View>
    <Text>{label}</Text>
    <TextInput onChangeText={onChangeText}/>
</View>
    )
}

export default Input