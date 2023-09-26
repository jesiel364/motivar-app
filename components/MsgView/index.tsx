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

export default function MsgView({ route }) {

    const title = route.params?.title
    const data = route.params?.data
      
        const dataSource = [
      {
        label: "Like",
        icon: "heart-outline",
        callback: console.log('test'),
      },
      {
        label: "Send",
        icon: "share-outline",
        callback: console.log('test'), 
      },
      {
        label: "Copy",
        icon: "copy-outline",
        callback: console.log('test'),
      },
      {
        label: "Update",
        icon: "ios-refresh-outline",
      },
        
    ];
  
  
    return (
      <View style={styles.container}>
        { title ? <Text style={styles.title}>{title}</Text> : null}
        {/* <MotiCard props={data}></MotiCard> */}
          <View style={styles.Card}>
     
     
           <Text selectable={true} style={styles.Text}>
           {data.texto}
          </Text>
        
            {/* <ActivityIndicator style={styles.loading} /> */}
        
        
        <Text style={styles.author}>
        {data.autor}
        </Text>
  
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
  
        
        </View>
      </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4BB543',
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