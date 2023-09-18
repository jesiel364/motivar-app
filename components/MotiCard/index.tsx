import React, { useState } from 'react';
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
    Alert

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';


const MotiCard = (props: any) => {



    const [frase, setFrase] = useState(false)
    const [fav, setFav] = useState(false)

    const showToast = (message: string) => {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

    const phrase = props.data

    function getMessage(){
        setFrase(phrase.frases[phrase.frases.length - 1]?.texto)
        return frase
    }

    async function copyToClipboard() {
        // Clipboard.setString('hello world')
        await Clipboard.setStringAsync(phrase.frases[phrase.frases.length - 1]?.texto)

        // showToast()
    }

    function handleLikePress() {
        setFav(!fav)
    }

    function share(){
        Sharing.shareAsync('ddd')
    }


   
          async  function send(){
                try {
                    const result = await Share.share({
                      message: phrase.frases[phrase.frases.length - 1]?.texto || ''
                        
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
            label: 'Like',
            icon: fav === true ? "heart" : "heart-outline",
            callback: handleLikePress

        },
        {
            label: 'Send',
            icon: "share-outline",
            callback: send

        },
        {
            label: 'Copy',
            icon: "copy-outline",
            callback: copyToClipboard
        },
        {
            label: 'Update',
            icon: "ios-refresh-outline",
            callback: props.update

        },

    ]

    // const random = Math.floor(Math.random() * phrase.frases.length)

    const [selected, setSelected] = useState(false);






    return (
        <View style={styles.Card}>
            <Text selectable={true} style={styles.Text}>


                {phrase ? phrase.frases[phrase.frases.length - 1]?.texto : <ActivityIndicator style={styles.loading} />}
                {fav}
            </Text>
            <Text style={styles.author}>

                {phrase ? phrase.frases[phrase.frases.length - 1]?.autor : null}
            </Text>
            <Text style={styles.Text}>{fav}</Text>



            <View style={styles.actions}>
                {dataSource.map((item, index) => (
                    <Pressable onPress={e => item.callback ? item.callback() : null} key={index}>
                        <Text style={styles.btnText}
                        >
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