import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import MotiCard from '../../components/MotiCard';
import { useEffect, useState } from 'react';

const Settings = () =>{
  
  return (
  <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      
      
        <Text style={styles.subtitle} >
          Tema
        </Text>
      
   
  
  
  </View>
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
    fontWeight: "600",
    marginTop: 64,
    textAlign: "left",
    marginRight: "auto",
    marginLeft: 32,
    
  },
  subtitle: {
    color: "#eee",
    fontSize: 32,
    fontWeight: "600",
    marginTop: 16,
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
  a: {
    fontSize: 32,
    color: "#eee",
    fontWeight: "600",
    marginBottom: "auto"
  }, 
})

export default Settings