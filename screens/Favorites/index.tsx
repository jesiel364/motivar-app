import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ToastAndroid,
  Button,
  TouchableOpacity,
  Pressable,
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
  ButtonClose,
} from "./style";
import emptyBlack from "../../assets/images/empty-black.png";
import emptyWhite from "../../assets/images/empty-white.png";
import FavoritesViewController from "./viewController";
import { MyContext } from "../../Global/Context";
import LongPressButton from "./example";
import { ModalCenter } from "../../components/Modal";

interface Props {
  item: any;
}

interface FavoritesProps {
  showCheck?: boolean;
  setShowCheck?: boolean;
  navigation?: any;
}

const Stack = createNativeStackNavigator();

const Favorites = ({ navigation }: any) => {
  const { getItem, setItem } = useAsyncStorage("@messages:favorites");

  const [data, setData] = useState([]);
  const {
    showCheck,
    setShowCheck,
    theme,
    selectedItems,
    setSelectedItems,
    total,
    setTotal,
  } = useContext(MyContext);

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
    // ToastAndroid.show("Item excluido", ToastAndroid.SHORT);
    handleFetch();
  }

  function handleSwipe() {
    ToastAndroid.show("Right", ToastAndroid.SHORT);
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const { isLight, send } = FavoritesViewController();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Container theme={theme}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <LongPressButton
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
                handleItemPress={handlePress}
                data={item}
                navigation={navigation}
                setShowCheck={setShowCheck}
                showCheck={showCheck}
                setOpenModal={setOpenModal}
                openModal={openModal}
              >
                <View
                  style={{
                    width: 300,
                  }}
                >
                  <Message theme={theme}>
                    {item.texto?.length > 94
                      ? item.texto?.slice(0, 94) + "..."
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
                  <TrashButton onPress={() => setOpenModal(true)}>
                    <Text>
                      <Ionicons
                        name="ellipsis-vertical-outline"
                        size={28}
                        color={theme === "Dark" ? "#c6c6c6" : "#282828"}
                      />
                    </Text>
                  </TrashButton>

                  <ModalCenter
                    style={{
                      position: "absolute",
                      top: "0px",
                    }}
                    open={openModal}
                    setOpen={setOpenModal}
                  >
                    <Pressable
                      onPress={() => (send(item), setOpenModal(false))}
                    >
                      <Ionicons
                        name="share-outline"
                        size={28}
                        color="#c6c6c6"
                      />
                    </Pressable>
                    <Ionicons name="heart-outline" size={28} color="#c6c6c6" />

                    <Pressable
                      onPress={() => (
                        handleRemove(item?.texto), setOpenModal(false)
                      )}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={28}
                        color="#c6c6c6"
                      />
                    </Pressable>
                    <Pressable onPress={() => setOpenModal(false)}>
                      <Ionicons
                        name="close-outline"
                        size={28}
                        color="#c6c6c6"
                      />
                    </Pressable>
                  </ModalCenter>
                </View>
              </LongPressButton>
              {/* </Item> */}
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
  const {
    showCheck,
    setShowCheck,
    selectedItems,
    setSelectedItems,
    total,
    setTotal,
    theme
  } = useContext(MyContext);
  
  const { isLight, send, } = FavoritesViewController();

  const headerStyle = {
    // backgroundColor: isLight() ? "#fff" : "#282828",
    backgroundColor: showCheck ? "#848484" : !isLight() ? "#282828" : "#f4f4f4",
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
            headerRight: () =>
              showCheck ? (
                <>
                  <Text
                    style={{
                      color:  theme === "Dark" ? "#c6c6c6" : "#282828",
                      fontSize: 36,
                      marginRight: 8,
                      marginTop: 8,
                    }}
                  >
                    {total}
                  </Text>
                  <Pressable
                    style={{
                      marginRight: 8,
                    }}
                    
                  >
                    <Ionicons
                      name="trash-outline"
                      size={28}
                      color={theme === "Dark" ? "#c6c6c6" : "#282828"}
                    />
                  </Pressable>
                  <Pressable onPress={() => (setShowCheck(false), setSelectedItems([]))}>
                    <Ionicons
                      name="close-circle-outline"
                      size={30}
                      color={theme === "Dark" ? "#c6c6c6" : "#282828"}
                    />
                  </Pressable>
                </>
              ) : null,
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
