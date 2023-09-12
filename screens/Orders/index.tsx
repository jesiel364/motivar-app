import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const Orders = () => {

    
    
    function handleScroll(){
         
    }

    return (
      <View style={styles.container}>
  
 <Text>Categorias</Text>

        
        <StatusBar style="auto" />

      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Orders