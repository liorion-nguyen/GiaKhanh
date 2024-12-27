import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Profile() {
    const { user } = useSelector((state: any) => state.user); // Get value state
    console.log("User: ", user);
    return <View style={styles.container}>
        <Text>Profile</Text>
        {
            user.profileImage ? <Image source={{ uri: user.profileImage }} style={styles.avatar} />
            : <Image source={{ uri: "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" }} style={styles.avatar}/>
        }
        <Text>{user.fullName}</Text>
        <Text>{user.username}</Text>
        <Text>Email: {user.email ? user.email : "chua co thong tin"}</Text>
        <Text>Phone: {user.phoneNumber ? user.phoneNumber : "chua co thong tin"}</Text>
        <Text>Gender: {user.gender ? user.gender : "chua co thong tin"}</Text>
        <Text>Date Of Birth: {user.dateOfBirth ? user.dateOfBirth : "chua co thong tin"}</Text>
        <Text>Address: {user.address ? user.address : "chua co thong tin"}</Text>
        <Text>Role: {user.role ? user.role : "chua co thong tin"}</Text>
        <Text style={styles.status}>Status: {user.isActive ? "Active" : "InActive"}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        padding: 20
    },
    avatar: {
        width: 150,
        height: 150, 
    },
    status: {
        backgroundColor: "green",
        width: 200,
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: 600,
        padding: 10,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 20,
        // marginTop: 20
    }
})

// Content, Padding, Border, Margin
