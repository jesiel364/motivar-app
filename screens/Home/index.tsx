import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import MotiCard from "../../components/MotiCard";
import { useEffect, useState } from "react";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [phraseDay, setPhraseDay] = useState();
  const [author, setAuthor] = useState(Math.floor(Math.random() * 4));

  const mainAuthors = [
    {
      authName: "Machado de Assis",
    },

    {
      authName: "Stevie Jobs",
    },
    {
      authName: "Mario Quintana",
    },
    {
      authName: "Clarice Lispector",
    },
    {
      authName: "Oscar Wilde",
    },
    {
      authName: "Fernando Pessoa",
    },
    {
      authName: "William Shakespeare",
    },
    {
      authName: "Augusto Cury",
    },
    {
      authName: "Luís de Camões",
    },

    {
      authName: "Carlos Drummond de Andrade",
    },
    {
      authName: "Albert Einstein",
    },
    {
      authName: "Charles Chaplin",
    },
    {
      authName: "Leonardo da Vinci",
    },
    {
      authName: "Vinicius de Moraes",
    },
    {
      authName: "Jesus Cristo",
    },
    {
      authName: "Michael Jordan",
    },
  ];

  // function updateMessage() {
  //   setAuthor(Math.floor(Math.random() * mainAuthors.length - 1));
  //   return;
  // }

  // useEffect(() => {
  //   // updateMessage()
  //   fetch(
  //     `https://pensador-api.vercel.app/?term=${mainAuthors[author].authName}&max=20`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setPhraseDay(json))
  //     .catch((err) => setPhraseDay({ err }));
  // }, []);

  async function updateMsg() {
  
  setPhraseDay(undefined)
  await setAuthor(Math.floor(Math.random() * mainAuthors.length - 1));
    setLoading(true);
    await fetch(
      `https://pensador-api.vercel.app/?term=${mainAuthors[author]?.authName}&max=20`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => setPhraseDay(json))
      .catch((err) => setPhraseDay({ err }));
    setLoading(false);
  }
  
 

  async function GetMessage() {
    setAuthor(Math.floor(Math.random() * mainAuthors.length - 1));
    setLoading(true);
    await fetch(
      `https://pensador-api.vercel.app/?term=${mainAuthors[author]?.authName}&max=20`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => (json !== phraseDay ? setPhraseDay(json) : updateMsg()))
      .catch((err) => setPhraseDay({ err }));
    setLoading(false);
  }
  
  
  useEffect(() => {
  if(phraseDay === '' || phraseDay === undefined || phraseDay === null){
    GetMessage()
  }
    
    
  }, []) 
    
    

  function handleScroll() {}

  function handleOrder() {
    navigation.navigate("orders");
  }

  return (
    <View style={styles.container}>
      <MotiCard update={updateMsg} data={phraseDay} />
      {/* <Text style={styles.Text}>
        
        </Text> */}

      

      {/* <Pressable onPress={GetMessage}>
          <Text style={styles.Text}>
            Update
          </Text>
        </Pressable> */}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#eee",
  },
});

export default Home;
