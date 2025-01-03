import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../../redux/slices/user";
import { useNavigation } from "@react-navigation/native";

type User = {
    fullName: string;
    email: string;
    username: string;
    profileImage: string;
}

export default function ListUser() {
    const { users } = useSelector((state: any) => state.user);
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const handleShowUser = async(user: User) => {
        await dispatch(setUserDetail(user));
        navigation.navigate("DetailUser")
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    users.map((user: User) => (
                        <TouchableOpacity style={styles.boxUser} onPress={() => handleShowUser(user)}>
                            <Image source={{ uri: user.profileImage ? user.profileImage : "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" }} style={styles.avatar} />
                            <View>
                                <Text>{user.fullName}</Text>
                                <Text>{user.email ? user.email : "Khong co email"}</Text>
                                <Text>{user.username}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    scrollView: {
        width: 300,
        height: 300,
    },
    fullname: {
        color: "white",
        fontSize: 20,
        fontWeight: 600
    },
    boxUser: {
        width: 300,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginBottom: 10,
        gap: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    }
})