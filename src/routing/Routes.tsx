import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProductLandingPage from '../screens/ProductLandingPage';
import MyProfile from '../screens/MyProfile';
import MyCart from '../screens/MyCart';
import Wishlist from '../screens/Wishlist';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="ProductLandingPage"
                screenOptions={({ route }) => ({
                    headerShown: true,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon;
                        if (route.name === 'ProductLandingPage') {
                            icon = '👔';
                        } else if (route.name === 'MyProfile') {
                            icon = '🧔🏻'; 
                        } else if (route.name === 'MyCart') {
                            icon = '🛒'; 
                        } else if (route.name === 'Wishlist') {
                            icon = '❤️';
                        }

                        return <Text style={{ fontSize: size }}>{icon}</Text>;
                    },
                })}
            >
            <Tab.Screen
                name="ProductLandingPage"
                component={ProductLandingPage}
                options={{ title: 'Products' }}
            />
            <Tab.Screen
                name="MyProfile"
                component={MyProfile}
                options={{ title: 'Profile' }}
            />
            <Tab.Screen
                name="Wishlist"
                component={Wishlist}
                options={{ title: 'Wishlist' }}
            />
            <Tab.Screen
                name="MyCart"
                component={MyCart}
                options={{ title: 'Cart' }}
            />
            </Tab.Navigator>
        </NavigationContainer>
    )
}