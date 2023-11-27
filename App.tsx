import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyContext, MyProvider } from "./Global/Context";
import { ThemeProvider } from "styled-components/native";
import Dark from "./Global/dark";
import { PaperProvider } from "react-native-paper";
import MyTabs from "./components/Tabs";

export type MsgProps = {
  id: number;
  body: string;
  author: string;
  label?: string;
};

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
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
