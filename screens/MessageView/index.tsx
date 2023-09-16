import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable, ActivityIndicator} from 'react-native';
import MotiCard from '../../components/MotiCard';
import { useEffect, useState } from 'react';

const MessageView = ({navigation}) => {

  const [loading, setLoading] = useState(false)

    const [phraseDay, setPhraseDay] = useState()
    const [author, setAuthor] = useState(Math.floor(Math.random() * 4))

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
      {
        authName: 'Platão'
      },
      {
        authName: 'Seneca'
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



 async function GetMessage(){
  setAuthor(Math.floor(Math.random() * 3))
      setLoading(true)
       await fetch(`https://pensador-api.vercel.app/?term=${mainAuthors[author].authName}&max=20`, {
          method: 'GET'
      })
          .then(
              response => response.json(),
              
            
          )
          .then(
              json => setPhraseDay(json),
              
              
          ).catch(
              err => setPhraseDay({err})
          )
           setLoading(false) 
  }
    
    function handleScroll(){
         
    }
    
    function handleOrder() {
navigation.navigate('orders')
    } 

    return (
      <View style={styles.container}>
  
     <MotiCard update={GetMessage} data={phraseDay} />
        {/* <Text style={styles.Text}>
        
        </Text> */}

{loading && <ActivityIndicator  />}

        {/* <Pressable onPress={GetMessage}>
          <Text style={styles.Text}>
            Update
          </Text>
        </Pressable> */}
        
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

  export default MessageView