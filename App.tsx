import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyContext, MyProvider } from "./Global/Context";
import { ThemeProvider } from "styled-components/native";
import Dark from "./Global/dark";
import { PaperProvider } from "react-native-paper";
import MyTabs from "./components/Tabs";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

export type MsgProps = {
  id: number;
  body: string;
  author: string;
  label?: string;
};

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();  
    
    const timerId = setTimeout(() => {
      SplashScreen.hideAsync();  // Oculta manualmente a tela de abertura
    }, 3000);

    // Limpando o temporizador quando o componente é desmontado
    return () => clearTimeout(timerId);// Impede que a tela de abertura seja ocultada automaticamente
  }, []);
  return (
    <ThemeProvider theme={Dark}>
      <MyProvider>
        <PaperProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </PaperProvider>
      </MyProvider>
    </ThemeProvider>
  );
}
