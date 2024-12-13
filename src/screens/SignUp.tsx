import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "../components/commons/input";
import { useState } from "react";
import Button from "../components/commons/button";
import axios from "axios";

export default function SignUp() {
    const navigation = useNavigation<any>();
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleLogin = () => {
        navigation.navigate('Login');
    }
    const handleSignUp = () => {
        // Validate form
        // if (!fullName || !username || !password || !confirmPassword) {
        //     Alert.alert('Error', 'All fields are required');
        //     return;
        // }
        // if (!fullName.includes(' ')) {
        //     Alert.alert('Error', 'Full name must contain at least 2 words');
        //     return;
        // }
        // if (password.length < 6) {
        //     Alert.alert('Error', 'Password must be at least 6 characters');
        //     return;
        // }
        // if (password !== confirmPassword) {
        //     Alert.alert('Error', 'Password and confirm password do not match');
        //     return;
        // }
        // Next step Sign Up.
        // navigation.navigate('Home');
        axios.post('https://medi-manager-be.vercel.app/users', {
            fullName: fullName,
            username: username,
            password: password,
            role: 'Parient'
        })
            .then(res => {
                Alert.alert(res.data.status < 400 ? 'Success' : 'Dang ky that bai', "Dang ky thanh cong");
                if (res.data.status < 400) {
                    navigation.navigate('Login');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return <View style={styles.container}>
        <Text style={styles.title}>Form Sign Up</Text>
        <Input value={fullName} onChangeText={setFullName} placeholder="Full name" secureTextEntry={false} />
        <Input value={username} onChangeText={setUsername} placeholder="Username" secureTextEntry={false} />
        <Input value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry={false} />
        <Input value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm password" secureTextEntry={false} />
        <Button title="Sign Up" onPress={handleSignUp} />
        <Button title="Login" onPress={handleLogin} />
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
