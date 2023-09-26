import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import MotiCard from "../../components/MotiCard";
import { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MsgView from "../../components/MsgView";
import Toast from 'react-native-toast-message';
import AsyncStorage, {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {useFocusEffect} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

interface Props{
  item: any
}

const Stack = createNativeStackNavigator()

const Favorites = ({navigation}) => {

  const {getItem, setItem } = useAsyncStorage("@messages:favorites")

const [data, setData] = useState([])

async function handleFetch() {
  const response = await getItem()
  const responseData = JSON.parse(response)
  setData(responseData)
 
}

console.log(data)

useFocusEffect(useCallback(()=> {
  handleFetch()

}, []))

  function handlePress(item:Props) {

    navigation.navigate('favoritesView', {data: item})
    
  }

  async function handleRemove(texto){
    const response = await getItem()
    const previousData = response ? JSON.parse(response) : []
    const data = previousData.filter((item) => texto !== item.texto)
    setItem(JSON.stringify(data))
    handleFetch()
  }

  return (
    <View style={styles.container}>
      


{data.length > 0 ? <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
          <Pressable onPress={() => handlePress(item)} style={styles.item}>
            <Text style={styles.text}>{item.texto?.length > 100 ? item.texto?.slice(0, 100)+'...' : item.texto }</Text>
            {/* <Text style={styles.text}>{item.texto}</Text> */}
            <Text style={styles.author}>{item.autor}</Text>
            <Pressable  onPress={() => handleRemove(item.texto)}>
            <Text style={styles.trash}><Ionicons name='trash' size={32} color="white" /></Text>
          </Pressable>
          </Pressable>

          </>
        )}
      /> : <Text style={styles.text}>Vazio</Text>}
    </View>
  );
};

export default function FavoritesView() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
      }}>
        <Stack.Screen
          name='main'
          component={Favorites}
          options={{
            title: 'Favoritos',
            headerShown: true

          }}
        />
        <Stack.Screen
          name='favoritesView'
          component={MsgView}
          options={{
            title: 'Favoritos',
            headerShown: true

          }}
        />
       
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: 'auto',
    // marginRight: 'auto'
  },

  title: {
    color: "#eee",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 64,
    textAlign: "left",
    marginRight: "auto",
    marginLeft: 32,
    marginBottom: "auto",
  },

  text: {
    fontSize: 18,
    color: "#eee",
    fontWeight: "400",
  },

  item: {
    backgroundColor: "#282828",
    margin: 'auto',
    padding: 16,
    borderRadius: 16,
    minWidth: 360,
    marginTop: 16
  },
  delete: {
    backgroundColor: "#d10909",
    margin: 'auto',
    padding: 16,
    borderRadius: 16,
    minWidth: 360,
    marginTop: 16
  },

  author: {
    fontSize: 14,
    color: "#808080",
    fontWeight: "600",
  },
  header: {
    backgroundColor: '#4a934a',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#fefefe"
  },

  grid: {

  }
,
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
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "auto",
    marginLeft: "auto",
  },
  trash: {
    marginLeft: 'auto'
  },

  loading: {
    marginLeft: "auto",
    marginRight: "auto",
  }, 
});

