import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackParams } from "../navigations/config";

export default function Home() {
    const navigation = useNavigation<any>();
    // const { user } = useRoute().params as StackParams['Home'];

    const handleLogout = () => {
        navigation.goBack();
    }
    return <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.welcome}>Welcome to the app</Text>
        {/* <Text style={styles.welcome}>{user.fullName}</Text>
        <Text style={styles.welcome}>{user.email}</Text>
        <Text style={styles.welcome}>{user.password}</Text> */}
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text>Logout</Text>
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