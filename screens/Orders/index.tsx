import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { SimpleGrid } from 'react-native-super-grid';



const Orders = () => {

  const [author, setAuthor] = useState()

  const ordersList = [
    {
      label: 'Em alta',
      icon: '🔥'
    },
    {
      label: 'Motivação',
      icon: '💪🏼'
    },
    {
      label: 'Sabedoria',
      icon: '🧠'
    },
    {
      label: 'Provérbios',
      icon: '📖'
    },
    {
      label: 'Empreendedorismo',
      icon: '💰'
    },
    {
      label: 'Reflexão',
      icon: '🤔'
    },
    {
      label: 'Otimismo',
      icon: '🤩'
    },
    {
      label: 'Disciplina',
      icon: '🚀'
    }
  ]
  
  const authorsList = [
    {
      name: "Jesus Cristo"
    },
    {
      name: "Stevie Jobs"
    },
    {
      name: "Aristoteles"
    },
    // {
    //   name: "Machado de Assis"
    // },
    {
      name: "Beatles"
    },
    {
      name: "Seneca"
    },
  ]

  function handlePress(name) {
    ToastAndroid.show(name, ToastAndroid.SHORT)
    setAuthor(name)
  }

  return (
    <View style={styles.container}>
    
    <Text style={styles.title}>Categorias</Text>

      <FlatGrid
        style={styles.grid}
        itemDimension={100}
        data={ordersList}
        renderItem={({ item, index }) => (
          <>
          <Text style={styles.gridIcon}>{item.icon}</Text>
          <Text style={styles.gridLabel} key={index}>{item.label}</Text>
          
          </>
          )}
      />
    <Text style={styles.title}>Autores</Text>

    {/* {<Text style={styles.title}>{author}</Text> || null} */}

      <FlatGrid
        style={styles.grid}
        itemDimension={100}
        data={authorsList}
        renderItem={({ item, index }) => (
          <>
         <Pressable onPress={() => handlePress(item.name)}>
          <Text style={styles.authorItem} key={index}>{item.name}</Text>
          </Pressable>
          
          
          </>
          )}
      />

      {/* <SimpleGrid
  itemDimension={80}
  data={[1,2,3,4,5,6,7,8,9]}
  renderItem={({ item }) => (<Text key={item}>{item}</Text>)}
/> */}


      <StatusBar style="auto" />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  
  title: {
    color: "#eee",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 64,
    textAlign: "left",
    marginRight: "auto",
    marginLeft: 32,
    marginBottom: 16
  },

  grid:{
    
  },

  gridLabel:{
    fontSize: 12,
    textAlign: 'center',
    color: "#eee"
  },
  authorItem:{
    fontSize: 14,
    textAlign: 'center',
    color: "#eee",
    backgroundColor: "#282828",
    borderRadius: 8,
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
    
    
  },
  gridIcon:{
    fontSize: 26,
    textAlign: 'center'
  }
});

export default Orders