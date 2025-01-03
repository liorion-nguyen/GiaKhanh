import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListUser from "../components/home/listUser";
import { setUsers } from "../redux/slices/user";

type User = {
    fullName: string;
    email: string;
    username: string;
}

export default function Home() {
    const navigation = useNavigation<any>();
    const { user, users } = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        navigation.navigate('Login');
    }
    const fetchUsers = async () => {
        await axios.get('https://medi-manager-be.vercel.app/users')
            .then(res => {
                dispatch(setUsers(res.data.data));
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (!user) {
            navigation.navigate("Login")
        }
        if (users.length < 1) {
            fetchUsers();
        }
    }, []);
    return <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.welcome}>Welcome to the app</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text>Logout</Text>
        </TouchableOpacity>
        <ListUser />
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
    welcome: {
        fontSize: 16,
        color: 'gray',
    },
    button: {
        width: 300,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});