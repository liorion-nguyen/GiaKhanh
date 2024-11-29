import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerIcon: ({ color, size }) => {
                    return <Ionicons name="menu" size={size} color={color} />;
                }
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
            />  
            <Drawer.Screen
                name="Profile"
                component={Profile}
            />
            <Drawer.Screen
                name="Search"
                component={Search}
            />
        </Drawer.Navigator>
    );
}