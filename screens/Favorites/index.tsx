import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ToastAndroid,
  
} from "react-native";
import { useEffect, useState, useCallback, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MsgView from "../../components/MsgView";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  Author,
  Container,
  EmptyComp,
  Img,
  Item,
  Message,
  TrashButton,
} from "./style";
import emptyBlack from "../../assets/images/empty-black.png";
import emptyWhite from "../../assets/images/empty-white.png";
import FavoritesViewController from "./viewController";
import { MyContext } from "../../Global/Context";

interface Props {
  item: any;
}

const Stack = createNativeStackNavigator();

const Favorites = ({ navigation }: any) => {
  const { getItem, setItem } = useAsyncStorage("@messages:favorites");

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response: any = await getItem();
    const responseData = JSON.parse(response);
    setData(responseData);
  }

  useEffect(() => {
    handleFetch();
  });

  function handlePress(item: Props) {
    navigation.navigate("favoritesView", { data: item });
  }

  async function handleRemove(texto) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item) => texto !== item.texto);
    setItem(JSON.stringify(data));
    ToastAndroid.show("Item excluido", ToastAndroid.SHORT);
    handleFetch();
  }

  function handleSwipe() {
    ToastAndroid.show("Right", ToastAndroid.SHORT);
  }

  const { theme } = useContext(MyContext);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const { isLight } = FavoritesViewController();

  return (
    <Container theme={theme}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <Item theme={theme} onPress={() => handlePress(item)}>
                <View
                  style={{
                    width: 300,
                  }}
                >
                  <Message theme={theme}>
                    {item.texto?.length > 62
                      ? item.texto?.slice(0, 62) + "..."
                      : item.texto}
                  </Message>
                  <Author theme={theme}>{item?.autor}</Author>
                </View>

                <View
                  style={{
                    maxWidth: 60,
                    marginLeft: "auto",
                  }}
                >
                  <TrashButton onPress={() => handleRemove(item.texto)}>
                    <Text style={styles.trash}>
                      <Ionicons
                        name="trash-outline"
                        size={28}
                        color={theme === "Dark" ? "#c6c6c6" : "#282828"}
                      />
                    </Text>
                  </TrashButton>
                </View>
              </Item>
            </>
          )}
        />
      ) : (
        <EmptyComp>
          <Img source={isLight() ? emptyBlack : emptyWhite} />
          {/* <Text style={styles.text}>Vazio</Text> */}
        </EmptyComp>
      )}
    </Container>
  );
};

export default function FavoritesView() {
  const { theme, isLight } = FavoritesViewController();

  const headerStyle = {
    backgroundColor: isLight() ? "#fff" : "#282828",
  };

  const headerTitle = {
    fontSize: 20,
    color: !isLight() ? "#fff" : "#282828",
  };
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: headerStyle,
          headerTintColor: "#fff",
          headerTitleStyle: headerTitle,
          // headerBackTitle: ''
        }}
      >
        <Stack.Screen
          name="main"
          component={Favorites}
          options={{
            title: "Favoritos",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="favoritesView"
          component={MsgView}
          options={{
            title: "Favoritos",
            headerShown: true,
            navigationBarColor: "#363636",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    color: "#c6c6c6",
    fontWeight: "400",
  },

  item: {
    backgroundColor: "#282828",
    margin: "auto",
    padding: 16,
    borderRadius: 16,
    minWidth: 360,
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    maxHeight: 116,
  },
  delete: {
    backgroundColor: "#d10909",
    margin: "auto",
    padding: 16,
    borderRadius: 16,
    minWidth: 360,
    marginTop: 16,
  },

  author: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "600",
  },
  header: {
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#282828",
  },

  grid: {},
  gridIcon: {
    fontSize: 26,
    textAlign: "center",
  },

  orderItem: {
    backgroundColor: "#282828",
    padding: 16,
    borderRadius: 16,
    // width: 120,
    height: 100,
  },
  Card: {
    margin: 32,
  },
  Text: {
    fontSize: 22,
    color: "#fefefe",
    fontWeight: "400",
    maxHeight: 400,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "auto",
    marginLeft: "auto",
  },
  trash: {},

  trashBtn: {
    marginLeft: "auto",
    // backgroundColor: '#7c7c7c',
    padding: 4,
    borderRadius: 4,
    marginTop: "auto",
    marginBottom: "auto",
  },

  loading: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
