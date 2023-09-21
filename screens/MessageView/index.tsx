import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable, ActivityIndicator, FlatList} from 'react-native';
import MotiCard from '../../components/MotiCard';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const TesteComp = ({navigation, route}) => {

  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      id: i,
      author: `Autor ${i}`,
      body: `Messagem ${i}`,
    });
  }

  function swi(item:any) {
    navigation.navigate('teste2', {item: item})
  }

return (
  <>

  <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => swi(item)} style={styles.item}>
            <Text style={styles.text}>{item.body}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
  </>
)
}
const TesteComp2 = ({navigation, route}) => {
  function swi() {
    navigation.navigate('teste1', {name: 'jj'})
  }

  const item = route.params.item

return (
  <>
  <Pressable onPress={() => swi()}>
  <Text>Go to screen 1</Text>

  </Pressable>

  <Pressable style={styles.item}>
            <Text style={styles.text}>{item.body}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </Pressable>
  </>)
}

export default function MessageView() {



    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
        <Stack.Screen
          name='teste1'
          component={TesteComp}
          options={{
            title: 'Feed',
            // headerShown: false

          }}
        />
        <Stack.Screen
          name='teste2'
          component={TesteComp2}
          options={{
            title: 'Test2',
            // headerShown: false

          }}
        />
        </Stack.Navigator>

      </NavigationContainer>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      color: "#282828", 
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      color: "#282828"
    } ,
    text: {
      fontSize: 18,
      color: "#eee",
      fontWeight: "400",
    },
  
    item: {
      backgroundColor: "#282828",
      margin: 8,
      padding: 16,
      borderRadius: 16,
    },
  
    author: {
      fontSize: 14,
      color: "#808080",
      fontWeight: "600",
    },
  });

