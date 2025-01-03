import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function ListUser() {
    const { users } = useSelector((state: any) => state.user);
    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({
})