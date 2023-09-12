import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable, Image, FlatList, ToastAndroid, TouchableOpacity } from 'react-native';


const MotiCard = (props: any) => {

    const phrase = props.data

    const dataSource = [
        {
            label: 'Like'
        },
        {
            label: 'Send'
        },
        {
            label: 'Copy'
        },
    ]

    const [selected, setSelected] = useState(false);

    // function ifPhrase(){
    //     if(phrase.frases){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
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
                    <Pressable key={index}>
                        <Text style={styles.btnText}>{item.label}</Text>
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