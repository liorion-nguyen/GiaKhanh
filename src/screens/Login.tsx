import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "../components/commons/input";
import Button from "../components/commons/button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/user";
// import { users } from "../data/user";

export default function Login() {
    const navigation = useNavigation<any>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Check valid email and password: email: abc@xyz.com, password: 123456@
        // if (!username || !password) {
        //     Alert.alert('Error', 'Email and password are required');
        //     return; // Dừng chạy hàm
        // }
        // if (password.length < 6) {
        //     Alert.alert('Error', 'Password must be at least 6 characters');
        //     return;
        // }
        // // password không chứa kí tự đặc biệt ngoại trừ @ 
        // // Phải có ít nhất 1 kí tự viết hoa, phải chứa cả số và chữ và kí tự đặc biệt.
        // if (!/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        //     Alert.alert('Error', 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character');
        //     return;
        // }

        axios.post('https://medi-manager-be.vercel.app/auth/login', {
            username: username,
            password: password
        })
            .then(res => {
                Alert.alert(res.data.status < 400 ? 'Success' : 'Error', res.data.description);
                if (res.data.status < 400) {
                    dispatch(setUser(res.data.data)); // Handle Update Value State.
                    navigation.navigate('Home');
                }
            })
            .catch(err => {
                console.log(err);
            })
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
        <Input value={username} onChangeText={setUsername} placeholder="Enter your username" secureTextEntry={false} />
        <Input value={password} onChangeText={setPassword} placeholder="Enter your password" secureTextEntry={true} />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Sign Up" onPress={handleSignUp} />
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
