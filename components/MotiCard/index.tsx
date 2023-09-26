import React, { useState, useEffect } from "react";
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
import AsyncStorage, {useAsyncStorage} from "@react-native-async-storage/async-storage"; 
import uuid from 'react-native-uuid';
import Toast from "react-native-toast-message";

const MotiCard = (props: any) => {
  function updateMessage() {
    setAuthor(Math.floor(Math.random() * mainAuthors.length - 1));
    return;
  }

  const {getItem, setItem} = useAsyncStorage('@messages:favorites')
  
  const [fav, setFav] = useState(false);

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const phrase = props.data;
  
  
 
 const list = []
 
 
  phrase?.frases.map((frase) => {
    // console.log(frase.texto)
    list.push(
    {
    autor: frase.autor,
    texto: frase.texto,
      
    }
    )
  })




let rand = Math.floor(Math.random() * (list.length - 1))

const frase = list[rand]
  
  
  async function copyToClipboard() {
    // Clipboard.setString('hello world')
    await Clipboard.setStringAsync(
      frase.texto
    );

    showToast("Mensagem copiada!");
  }



 async function handleLikePress() {

  const response =  await getItem()
  const previousData = response ? JSON.parse(response) : []
  const filt = previousData.filter(item => item.texto === frase.texto )
  const data = [...previousData, frase]
  console.log(filt)
    // setFav(!fav);
    if(!!filt){
      await setItem(JSON.stringify(data))
    // await AsyncStorage.setItem('@messages:favorites', JSON.stringify(frase))
    showToast('Adicionado aos favoritos!')
    }
    
  }

  async function send() {
    try {
      const result = await Share.share({
        message: frase.texto,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  const dataSource = [
    {
      label: "Like",
      icon: fav === true ? "heart" : "heart-outline",
      callback: handleLikePress,
    },
    {
      label: "Send",
      icon: "share-outline",
      callback: send,
    },
    {
      label: "Copy",
      icon: "copy-outline",
      callback: copyToClipboard,
    },
    {
      label: "Update",
      icon: "ios-refresh-outline",
      callback: props.update,
    },
  ];

  // const random = Math.floor(Math.random() * phrase.frases.length)

  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.Card}>
     
        {frase ? 
        (
         <Text selectable={true} style={styles.Text}>{
        frase.texto}
        </Text>
        )
        
       : (
          <ActivityIndicator color={"#ffffff"} style={styles.loading} />
        )}
        
      
      <Text style={styles.author}>
        {frase ? frase?.autor
          : (frase?.texto && frase?.texto === "Undefined" ? "Desconhecido" : null)}
      </Text>
      <Text style={styles.Text}>{fav}</Text>

      <View style={styles.actions}>
        {dataSource.map((item, index) => (
          <Pressable
            onPress={(e) => (item.callback ? item.callback() : null)}
            key={index}
          >
            <Text style={styles.btnText}>
              <Ionicons name={item.icon} size={32} color="white" />
            </Text>
          </Pressable>
        ))}

        {/* <TouchableOpacity
                    onPress={() => setSelected(!selected)}
                    style={{ backgroundColor: selected ? "#eee" : "transparent" }}
                >
                    <Text>Press me</Text>
                </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Card: {
    margin: 32,
  },
  Text: {
    fontSize: 22,
    color: "#eee",
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

export default MotiCard;
