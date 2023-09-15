import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import MotiCard from '../../components/MotiCard';
import { useEffect, useState } from 'react';

const Home = ({navigation}) => {

    const [phraseDay, setPhraseDay] = useState()
    const [author, setAuthor] = useState(Math.floor(Math.random() * 3))

    const mainAuthors = [
      {
        authName: 'Jesus Cristo'
      },
      {
        authName: 'Machado de Assis'
      },
      {
        authName: 'Beatles'
      },
      {
        authName: 'Stevie Jobs'
      },
    ]



    function updateMessage(max) {
      setAuthor(Math.floor(Math.random() * max))
      return
    }

    useEffect(() => {
      
        fetch(`https://pensador-api.vercel.app/?term=${mainAuthors[author].authName}&max=20`, {
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
        {/* <Text style={styles.Text}>
        
        </Text> */}
        
        <StatusBar style="auto" />

      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      color: "white", 
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      color: "#eee"
    } 
  });

  export default Home