import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function DetailUser() {
    const { userDetail } = useSelector((state: any) => state.user); 
    return <View style={styles.container}>
        <Text>Profile</Text>
        <Image source={{ uri: userDetail.profileImage ? userDetail.profileImage : "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" }} style={styles.avatar} />
        <Text>{userDetail.fullName}</Text>
        <Text>{userDetail.username}</Text>
        <Text>Email: {userDetail.email ? userDetail.email : "chua co thong tin"}</Text>
        <Text>Phone: {userDetail.phoneNumber ? userDetail.phoneNumber : "chua co thong tin"}</Text>
        <Text>Gender: {userDetail.gender ? userDetail.gender : "chua co thong tin"}</Text>
        <Text>Date Of Birth: {userDetail.dateOfBirth ? userDetail.dateOfBirth : "chua co thong tin"}</Text>
        <Text>Address: {userDetail.address ? userDetail.address : "chua co thong tin"}</Text>
        <Text>Role: {userDetail.role ? userDetail.role : "chua co thong tin"}</Text>
        <Text style={styles.status}>Status: {userDetail.isActive ? "Active" : "InActive"}</Text>
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
        borderRadius: 75
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
