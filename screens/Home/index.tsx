import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import MotiCard from '../../components/MotiCard';
import { useEffect, useState } from 'react';

const Home = ({navigation}) => {

    const [phraseDay, setPhraseDay] = useState()
    const author = 'Jesus Cristo'

    useEffect(() => {
      
        fetch(`https://pensador-api.vercel.app/?term=${author}&max=5`, {
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
    
    function handleOrder() {
navigation.navigate('orders')
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