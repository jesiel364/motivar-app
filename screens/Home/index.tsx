import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MotiCard from '../../components/MotiCard';
import { useEffect, useState } from 'react';

const Home = () => {

    const [phraseDay, setPhraseDay] = useState()

    useEffect(() => {
      
        fetch('https://pensador-api.vercel.app/?term=Machado+de+Assis&max=5', {
            method: 'GET'
        })
            .then(
                response => response.json()
            )
            .then(
                json => setPhraseDay(json)
            ).catch(
                err => setPhraseDay({err})
            )

    }, [])
    
    function handleScroll(){
         
    }

    return (
      <View style={styles.container}>
  
     <MotiCard data={phraseDay} />

        
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

  export default Home