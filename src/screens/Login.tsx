import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Check valid email and password
        const newUser = {
            fullName: 'John Doe',
            email: email,
            password: password
        }
        navigation.navigate('Home', { user: newUser });
    }
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }
    // useEffect(() => {
    //     navigation.setOptions({
    //         title: email
    //     });
    // }, [navigation, email]);
    // nếu không có tham số truỳen vào trong [] thì sẽ chạy 1 lần khi component được render lần đầu.
    // nếu có tham số truỳen vào trong [] thì sẽ chạy lần đầu khi component được render lần đầu và khi tham số thay đổi giá trị.


    return <View style={styles.container}>
        <Text style={styles.title}>Form Login</Text>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text>Sign Up</Text>
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
