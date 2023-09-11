import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';



const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>


        <Stack.Screen
          name='home'
          component={Home}
          options={{
            title: 'Home',
            headerShown: false

          }}
        />
      </Stack.Navigator>


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
