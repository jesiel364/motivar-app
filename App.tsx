import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import OrderView from './screens/Orders';
import Favorites from './screens/Favorites';
import Settings from './screens/Settings';
import MessageView from './screens/MessageView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export type MsgProps = {
  id: number,
  body: string,
  author: string,
  label?: string
}

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
           else if (route.name === 'favorites') {
              iconName = focused ? 'heart-outline' : 'heart-outline';
            }
           else if (route.name === 'settings') {
              iconName = focused ? 'cog-outline' : 'cog-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: styles.tab,

          
          
        })}
    >
      <Tab.Screen name="home" component={Home} options={{
            title: 'Citações',
            headerShown: true,
            headerStyle: styles.headerTab,
            headerTitleStyle: styles.headerTitleStyle

          }} />
      <Tab.Screen name="orders" component={OrderView} options={{
            title: 'Categorias',
            headerShown: false

          }} />
      <Tab.Screen name="favorites" component={Favorites} options={{
            title: 'Favoritos',
            headerShown: false

          }} />
      <Tab.Screen name="settings" component={Settings} options={{
            title: 'Configurações',
            headerShown: true,
            headerStyle: styles.headerTab,
            headerTitleStyle: styles.headerTitleStyle

          }} />
      {/* <Tab.Screen name="teste" component={MessageView} options={{
            title: 'Teste',
            headerShown: false

          }} /> */}
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
    padding: 0,
    margin: 0
  },
  
  tab:{
    backgroundColor: "#282828",
    borderTopColor: "#424242",
    borderTopWidth: 1,
  } 
  ,
  headerTab: {
    backgroundColor: '#282828'
  },
  headerTitleStyle: {
    color: '#fff'
  }
});
