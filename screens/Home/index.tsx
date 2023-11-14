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
import { useEffect, useState, useCallback, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import ViewController from "../../ViewController";
import { HomeStyles } from "./style";
import { MyContext, MyProvider } from "../../Global/Context";
import * as S from "./style";

const Home = ({ navigation }) => {
  const { phraseDay, erro, updateMsg } = ViewController();
  const styles = HomeStyles;

  const { theme } = useContext(MyContext);

  return (
    <S.HomeContainer theme={theme}>
      <MotiCard theme={theme} update={updateMsg} data={phraseDay} erro={erro} />
      {/* <Text style={styles.Text}>{theme}</Text> */}

      <StatusBar style="auto" />
    </S.HomeContainer>
  );
};

export default Home;
