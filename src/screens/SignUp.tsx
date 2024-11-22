import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
    const navigation = useNavigation<any>();
    const handleLogin = () => {
        navigation.navigate('Login');
    }
    const handleSignUp = () => {
        navigation.navigate('Home');
    }
    return <View style={styles.container}>
        <Text style={styles.title}>Form Sign Up</Text>
        <TextInput placeholder="Full name" style={styles.input}/>
        <TextInput placeholder="Email" style={styles.input}/>
        <TextInput placeholder="Password" style={styles.input}/>
        <TextInput placeholder="Confirm password" style={styles.input}/>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text>Login</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 10
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10
    },
});
