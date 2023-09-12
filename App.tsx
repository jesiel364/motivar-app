import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Orders from './screens/Orders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'orders') {
              iconName = focused ? 'list-outline' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tab.Screen name="home" component={Home} options={{
            title: 'Home',
            headerShown: false

          }} />
      <Tab.Screen name="orders" component={Orders} options={{
            title: 'Categorias',
            headerShown: true

          }} />
    </Tab.Navigator>
  );
}



const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
    
    

      
           <MyTabs/>
      
  
   


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
