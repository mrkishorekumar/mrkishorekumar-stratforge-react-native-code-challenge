import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import RoutingList, { RoutingNameAndTitle } from './RoutingList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Tab = createBottomTabNavigator();

export default function Routes() {

    const wishlistCount = useSelector((state: RootState) => state.product.wishlist.length);
    const cartCount = useSelector((state: RootState) => state.product.cart.length);

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={RoutingNameAndTitle.PLP.name}
                screenOptions={({ route }) => ({
                    headerShown: true,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon;
                        if (route.name === RoutingNameAndTitle.PLP.name) {
                            icon = '👔';
                        } else if (route.name === RoutingNameAndTitle.MYPROFILE.name) {
                            icon = '🧔🏻';
                        } else if (route.name === RoutingNameAndTitle.CART.name) {
                            icon = '🛒';
                        } else if (route.name === RoutingNameAndTitle.WISHLIST.name) {
                            icon = '❤️';
                        }
                        return <Text style={{ fontSize: size }}>{icon}</Text>;
                    },
                })}
            >
                {
                    RoutingList.map((route) => {
                        let options = route.options;
                        if (route.name === RoutingNameAndTitle.WISHLIST.name) {
                            options = {
                                ...options,
                                tabBarBadgeStyle: { backgroundColor: 'black', color: 'white' },
                                tabBarBadge: wishlistCount > 0 ? wishlistCount : undefined,
                            };
                        } else if (route.name === RoutingNameAndTitle.CART.name) {
                            options = {
                                ...options,
                                tabBarBadgeStyle: { backgroundColor: 'black', color: 'white' },
                                tabBarBadge: cartCount > 0 ? cartCount : undefined,
                            };
                        }
                        return (
                            <Tab.Screen name={route.name} component={route.component} options={options} key={route.id} />
                        )
                    })
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}