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
import { useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { SimpleGrid } from 'react-native-super-grid';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MotiCard from '../../components/MotiCard';
import MsgView from '../../components/MsgView';
import { MsgProps } from '../../App';


const Stack = createNativeStackNavigator()

const Orders = ({ navigation }) => {

  const [author, setAuthor] = useState()

 interface OrdersType {
    label: string,
    name: string,
    icon: string,
    data?: MsgProps
  }

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

  function handlePress(item: OrdersType) {
    ToastAndroid.show(item, ToastAndroid.SHORT)
    setAuthor(item)
    navigation.navigate('order', {title: item.label , data: {
      autor: `Leonardo da Vinci`,
      texto: "A lei suprema da arte é a representação do belo.",
    } })
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
      <Stack.Navigator screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
      }}>
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
          component={MsgView}
          
          options={{
            title: 'Categorias',
            headerShown: true

          }}
          
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
header: {
    backgroundColor: '#40869b',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#fefefe"
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // minWidth: '100vw'
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

  grid: {

  },

  gridLabel: {
    fontSize: 16,
    textAlign: 'center',
    color: "#eee",
    fontWeight: "600"
  },
  authorItem: {
    fontSize: 14,
    textAlign: 'center',
    color: "#eee",
    backgroundColor: "#282828",
    borderRadius: 8,
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,


  },
  gridIcon: {
    fontSize: 26,
    textAlign: 'center'
  },

  orderItem: {
    backgroundColor: "#282828",
    padding: 16,
    borderRadius: 16,
    // width: 120,
    height: 100,
  },
  Card: {
    margin: 32,
  },
  Text: {
    fontSize: 22,
    color: "#fefefe",
    fontWeight: "400",
    maxHeight: 400
  },
  author: {
    fontSize: 16,
    color: "#808080",
    fontWeight: "600",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btnText: {
    padding: 16,
  },

  loading: {
    marginLeft: "auto",
    marginRight: "auto",
  }, 
});

