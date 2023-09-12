import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable, Image, FlatList, ToastAndroid, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const MotiCard = (props: any) => {

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

    const phrase = props.data

    const dataSource = [
        {
            label: 'Like', 
            icon: "heart-outline"
        },
        {
            label: 'Send', 
            icon: "share-outline" 
        },
        {
            label: 'Copy', 
            icon: "copy-outline"
        },
    ]

    const [selected, setSelected] = useState(false);

    function handlePress(item){
      showToast(item)
    } 
    return (
        <View style={styles.Card}>
            <Text style={styles.Text}>
                
                {phrase ? phrase.frases[0].texto : null }
            </Text>
            <Text style={styles.author}>
                
                {phrase ? phrase.frases[0].autor : null }
            </Text>

          

            <View style={styles.actions}>
                {dataSource.map((item, index) => (
                    <Pressable onPress={e => handlePress(item.label)} key={index}>
                        <Text style={styles.btnText}
                        >
                         <Ionicons name={item.icon} size={24} />
                
                        
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
    )
}

const styles = StyleSheet.create({
    Card: {
        margin: 32


    },
    Text: {
        fontSize: 22
    },
    author: {
        fontSize: 16,
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
    }

})

export default MotiCard