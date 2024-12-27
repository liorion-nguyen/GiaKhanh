import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

type User = {
    fullName: string;
    email: string;
    username: string;
}

export default function Home() {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation<any>();
    const [users, setUsers] = useState<User[]>([]);
    const { user } = useSelector((state: any) => state.user); // Get value state
    console.log("User: ", user);
    
    const handleLogout = () => {
        // navigation.goBack();
        navigation.navigate('Login');
    }
    useEffect(() => {
        const fetchUsers = async () => {
            await axios.get('https://medi-manager-be.vercel.app/users')
                .then(res => {
                    setUsers(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
            setLoading(false);
        }
        fetchUsers();
    }, []);
    return <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.welcome}>Welcome to the app</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text>Logout</Text>
        </TouchableOpacity>
        {
            loading ? <Text>Loading...</Text> :
                <ScrollView style={styles.scrollView}>
                    {
                        users.map((user: User) => (
                            <View style={styles.boxUser}>
                                <Text>{user.fullName}</Text>
                                <Text>{user.email ? user.email : "Khong co email"}</Text>
                                <Text>{user.username}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
        }
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
    boxUser: {
        width: 300,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    scrollView: {
        width: 300,
        height: 300,
    }
});