import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import HomeTab from '../screens/HomeTab';
import DetailUser from '../components/home/detailUser';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // hiển thị header hay không
                headerStyle: { backgroundColor: 'blue' }, // style của header
                headerTintColor: 'white', // màu của icon và title
                headerTitleStyle: { fontWeight: 'bold' } // style của title
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeTab}
                options={{
                    title: "Trang chủ"
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: "Đăng nhập",
                    headerStyle: { backgroundColor: 'red' }, // style của header
                    headerTintColor: 'grey', // màu của icon và title
                    headerTitleStyle: { fontWeight: 'bold' } // style của title
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title: "Đăng ký"
                }}
            />
            <Stack.Screen
                name="DetailUser"
                component={DetailUser}
                options={{
                    title: "Thông tin người dùng",
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;