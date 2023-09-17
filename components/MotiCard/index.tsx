import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable, Image, FlatList, ToastAndroid, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const MotiCard = (props: any) => {

const random = Math.floor(Math.random() * 20)

  const [fav, setFav] = useState(false)

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

    const phrase = props.data

    const dataSource = [
        {
            label: 'Like', 
            icon: fav === true ? "heart" : "heart-outline",

        },
        {
            label: 'Send', 
            icon: "share-outline" ,
            
        },
        {
            label: 'Copy', 
            icon: "copy-outline",
        },
      
    ]

    const [selected, setSelected] = useState(false);

    function handlePress(item){
    //   showToast(item)
      
      if(item === "Like"){
        setFav(!fav)
      }
      
      
    } 
    return (
        <View style={styles.Card}>
            <Text style={styles.Text}>
           
                
                {phrase ? phrase.frases[0].texto : <ActivityIndicator style={styles.loading}/> }
                {fav}
            </Text>
            <Text style={styles.author}>
                
                {phrase ? phrase.frases[4].autor : null }
            </Text>
            <Text style={styles.Text}>{fav}</Text>

          

            <View style={styles.actions}>
                {dataSource.map((item, index) => (
                    <Pressable onPress={e => handlePress(item.label)} key={index}>
                        <Text style={styles.btnText}
                        >
                         <Ionicons name={item.icon} size={32} color="white"/>
                
                        
                        </Text>
                    </Pressable>

                    


                ))}
                
                 <Pressable onPress={e => props.update()} >
                        <Text style={styles.btnText}
                        >
                         <Ionicons name="ios-refresh-outline" size={32} color="white"/>
                
                        
                        </Text>
                    </Pressable>

                {/* <TouchableOpacity
                    onPress={() => setSelected(!selected)}
                    style={{ backgroundColor: selected ? "#eee" : "transparent" }}
                >
                    <Text>Press me</Text>
                </TouchableOpacity> */}
                
               
               

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        margin: 32,
        


    },
    Text: {
        fontSize: 22, 
        color: "#eee",
        fontWeight: "400",
        
       
    },
    author: {
        fontSize: 16,
        color: "#808080",
        fontWeight: '600'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 'auto',
        marginLeft: 'auto',

    },
    btnText: {
        padding: 16
    },
    
    loading: {
      marginLeft: 'auto',
      
    }

})

export default MotiCard