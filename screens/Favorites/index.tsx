import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import MotiCard from "../../components/MotiCard";
import { useEffect, useState } from "react";

const Favorites = () => {
  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      id: i,
      author: `Leonardo da Vinci`,
      body: "A lei suprema da arte é a representação do belo.",
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable style={styles.item}>
            <Text style={styles.text}>{item.body}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

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
    fontWeight: "700",
    marginTop: 64,
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

  item: {
    backgroundColor: "#282828",
    margin: 8,
    padding: 16,
    borderRadius: 16,
  },

  author: {
    fontSize: 14,
    color: "#808080",
    fontWeight: "600",
  },
});

export default Favorites;
