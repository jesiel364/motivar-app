import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
  Share,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import * as Sharing from "expo-sharing";
import { useEffect, useState, useContext } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { SimpleGrid } from 'react-native-super-grid';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MotiCard from '../../components/MotiCard';
import MsgView from '../../components/MsgView';
import { MsgProps } from '../../App';
import { styles, Container, Header, Title, OrderItem, GridIcon, GridLabel, AuthorItem } from './style';
import { OrderViewController } from './viewController';
import { MyContext } from '../../Global/Context';

const Stack = createNativeStackNavigator()

const Orders = ({ navigation }) => {



 interface OrdersType {
    label: string,
    name: string,
    icon: string,
    data?: MsgProps
  }

  const {theme} = useContext(MyContext)
  const {mainAuthors, getMessageByAuthor, message} = OrderViewController()
  const {author, setAuthor} = useContext(MyContext)

// useEffect(()=> (
//   console.log(getMessageByAuthor('Stevie Jobs'))
// ))

 async function handlePress(item: OrdersType) {
    // ToastAndroid.show(item, ToastAndroid.SHORT)
    setAuthor(item)
    await getMessageByAuthor(item)
    console.log(message)
    navigation.navigate('order', {title: item.label, messages: message , type: 'author' , data: {
      autor: `Leonardo da Vinci`,
      texto: "A lei suprema da arte é a representação do belo.",
    } })
  }



  return (
    <Container theme={theme}>

      <FlatGrid
        style={styles.grid}
        itemDimension={100}
        data={mainAuthors}
        renderItem={({ item, index }) => (
          <>
            <Pressable onPress={() => handlePress(item.authName)}>
              <AuthorItem theme={theme} key={index}>{item.authName}</AuthorItem>
            </Pressable>


          </>
        )}
      />


      <StatusBar style="auto" />

    </Container>
  )
}

export default function OrderView() {

  const {author, setAuthor} = useContext(MyContext)
  const {theme} = useContext(MyContext)

  const header = {
    backgroundColor: theme === "Light" ? "#fff" : "#363636",
  }

  const headerTitle = {
    color: theme === "Light" ? "#363636" : "#f4f4f4",
  }


  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
        
      }}>
        <Stack.Screen
          name='main'
          component={Orders}
          options={{
            title: 'Categorias',
            headerShown: true,
            headerStyle: header,
            headerTitleStyle: headerTitle

          }}
        />
        <Stack.Screen
          name='order'
          component={MsgView}
          
          options={{
            title: author,
            headerShown: true

          }}
          
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}


