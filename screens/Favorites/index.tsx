import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Pressable } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MsgView from "../../components/MsgView";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import {
  Author,
  Container,
  EmptyComp,
  Img,
  Message,
  TrashButton,
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
  const {
    showCheck,
    setShowCheck,
    theme,
    selectedItems,
    setSelectedItems,

    
  } = useContext<any>(MyContext);

 

  function handlePress(item: Props) {
    // console.log(item)
    navigation.navigate("favoritesView", { data: item });
  }

  const {
    isLight,
    send,
    data,
    deleteMultiples,
    getItem,
    handleFetch,
    handleRemove,
    openModal,
    setData,
    setItem,
    setOpenModal,
  } = FavoritesViewController();

  // const [list2, setList2] = useState<[{}]>([{}]);

  // useEffect(() => {
  //   data.map((item) => {
  //     // console.log(item);
  //     setList2([
  //       {
  //         ...item,
  //         check: false
  //       }
  //     ]);
  //   });
  // }, [data]);

  // console.log(list2);

  return (
    <Container theme={theme}>
      {data && data.length > 0 ? (
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
                data={data}
                navigation={navigation}
                setShowCheck={setShowCheck}
                showCheck={showCheck}
                setOpenModal={setOpenModal}
                openModal={openModal}
                list={data}
                item={item}
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

export default function FavoritesView({ navigation }) {
  const {
    showCheck,
    setShowCheck,
    selectedItems,
    setSelectedItems,
    total,
    setTotal,
    theme,
  } = useContext<any>(MyContext);

  const { isLight, send, deleteMultiples, onCloseCheckMode } =
    FavoritesViewController();

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
                      color: theme === "Dark" ? "#c6c6c6" : "#282828",
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
                    onPress={() => deleteMultiples()}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={28}
                      color={theme === "Dark" ? "#c6c6c6" : "#282828"}
                    />
                  </Pressable>
                  <Pressable onPress={() => onCloseCheckMode(navigation)}>
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
