import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { SimpleGrid } from 'react-native-super-grid';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function DetailView({route}){

  const order = route.params.orderName

  return(
    <View style={styles.container}>
    <Text style={styles.title}>{order}</Text>
    </View>
  )
}

const Orders = ({navigation}) => {

  const [author, setAuthor] = useState()

  const ordersList = [
    {
      label: 'Em alta',
      icon: '🔥'
    },
    {
      label: 'Motivação',
      icon: '💪🏼'
    },
    {
      label: 'Sabedoria',
      icon: '🧠'
    },
    {
      label: 'Provérbios',
      icon: '📖'
    },
    {
      label: 'Empreendedorismo',
      icon: '💰'
    },
    {
      label: 'Reflexão',
      icon: '🤔'
    },
    {
      label: 'Otimismo',
      icon: '🤩'
    },
    {
      label: 'Disciplina',
      icon: '🚀'
    },
    {
      label: 'Ver mais',
      icon: '➕'
    }
  ]
  
  const authorsList = [
    {
      name: "Jesus Cristo"
    },
    {
      name: "Stevie Jobs"
    },
    {
      name: "Aristoteles"
    },
    // {
    //   name: "Machado de Assis"
    // },
    {
      name: "Beatles"
    },
    {
      name: "Seneca"
    },
  ]

  function handlePress(name) {
    ToastAndroid.show(name, ToastAndroid.SHORT)
    setAuthor(name)
    navigation.navigate('order', {orderName: name})
  }

  return (
    <View style={styles.container}>
    
    <Text style={styles.title}>Categorias</Text>

      <FlatGrid
        style={styles.grid}
        itemDimension={86}
        data={ordersList}
        renderItem={({ item, index }) => (
          <>
          <Pressable onPress={() => handlePress(item.label)} style={styles.orderItem}>
          <Text style={styles.gridIcon}>{item.icon}</Text>
          <Text style={styles.gridLabel} key={index}>{item.label}</Text>
          </Pressable>
          
          </>
          )}
      />
    <Text style={styles.title}>Autores</Text>

    {/* {<Text style={styles.title}>{author}</Text> || null} */}

      <FlatGrid
        style={styles.grid}
        itemDimension={100}
        data={authorsList}
        renderItem={({ item, index }) => (
          <>
         <Pressable onPress={() => handlePress(item.name)}>
          <Text style={styles.authorItem} key={index}>{item.name}</Text>
          </Pressable>
          
          
          </>
          )}
      />

      {/* <SimpleGrid
  itemDimension={80}
  data={[1,2,3,4,5,6,7,8,9]}
  renderItem={({ item }) => (<Text key={item}>{item}</Text>)}
/> */}


      <StatusBar style="auto" />

    </View>
  )
}

export default function OrderView() {



  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen
        name='main'
        component={Orders}
        options={{
          title: 'Feed',
          headerShown: false

        }}
      />
      <Stack.Screen
        name='order'
        component={DetailView}
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  
  title: {
    color: "#eee",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 64,
    textAlign: "left",
    marginRight: "auto",
    marginLeft: 16,
    marginBottom: 16
  },

  grid:{

  },

  gridLabel:{
    fontSize: 16,
    textAlign: 'center',
    color: "#282828",
    fontWeight: "600"
  },
  authorItem:{
    fontSize: 14,
    textAlign: 'center',
    color: "#eee",
    backgroundColor: "#282828",
    borderRadius: 8,
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
   
    
  },
  gridIcon:{
    fontSize: 26,
    textAlign: 'center'
  },
  
  orderItem: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 16,
    // width: 120,
    height: 100,
  }
});

