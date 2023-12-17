import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
  Share,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useEffect, useState, useContext } from "react";

import { MyContext } from "../../Global/Context";
import { ActionGroup, Author, Card, Container, Message, Title } from "./style";
import { MsgViewController } from "./viewController";

export default function MsgView({ route }) {
  const title = route.params?.title;
  const data = route.params?.data;
  const type = route.params?.type;
  const frases = route.params?.messages?.frases;
  // const [fav, setFav] = useState<boolean>(false)

  // console.log(data[0], "<== data")

  const {
    isLight,
    messageAuthor,
    randomMessageByAuthor,
    handleLikePress,
    fav,
  } = MsgViewController();

  const { author, setAuthor, theme } = useContext(MyContext);

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  async function send() {
    try {
      const result = await Share.share({
        message: `"${randomMessageByAuthor.texto}" ${randomMessageByAuthor.autor}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  async function copyToClipboard() {
    await Clipboard.setStringAsync(
      `"${randomMessageByAuthor.texto}" ${randomMessageByAuthor.autor}`
    );

    showToast("Mensagem copiada!");
  }

  const dataSource = [
    {
      label: "Like",
      icon: fav ? "heart" : "heart-outline",
      callback: () => handleLikePress(randomMessageByAuthor),
    },
    {
      label: "Send",
      icon: "share-outline",
      callback: send,
    },
    {
      label: "Copy",
      icon: "copy-outline",
      callback: copyToClipboard,
    },
    // {
    //   label: "Update",
    //   icon: "ios-refresh-outline",
    // },
  ];

  return (
    <Container theme={theme}>
      {type === "author" ? (
        <>
          <Card theme={theme}>
            {randomMessageByAuthor?.texto ? (
              <>
                <Message theme={theme} selectable={true}>
                  {randomMessageByAuthor?.texto}
                </Message>

                <Author theme={theme}>{randomMessageByAuthor?.autor}</Author>

                <ActionGroup theme={theme} style={styles.actions}>
                  {dataSource.map((item, index) => (
                    <Pressable
                      onPress={(e) => (item.callback ? item.callback() : null)}
                      key={index}
                    >
                      <Text style={styles.btnText}>
                        <Ionicons
                          name={item.icon}
                          size={32}
                          color={!isLight() ? "white" : "black"}
                        />
                      </Text>
                    </Pressable>
                  ))}
                </ActionGroup>
              </>
            ) : (
              <ActivityIndicator style={styles.loading} />
            )}
          </Card>
        </>
      ) : (
        <>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {/* <MotiCard props={data}></MotiCard> */}
          <Card theme={theme}>
            <Message theme={theme} selectable={true}>
              {data.texto}ert
            </Message>

            {/* <ActivityIndicator style={styles.loading} /> */}

            <Author theme={theme}>{data.autor}</Author>

            <ActionGroup theme={theme}>
              {dataSource.map((item, index) => (
                <Pressable
                  onPress={(e) => (item.callback ? item.callback() : null)}
                  key={index}
                >
                  <Text style={styles.btnText}>
                    <Ionicons
                      name={item.icon}
                      size={32}
                      color={isLight() ? "black" : "white"}
                    />
                  </Text>
                </Pressable>
              ))}
            </ActionGroup>
          </Card>
        </>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4BB543",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fefefe",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // minWidth: '100vw'
  },

  title: {
    color: "#eee",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 64,
    textAlign: "left",
    marginRight: "auto",
    marginLeft: 16,
    marginBottom: 16,
  },

  grid: {},

  gridLabel: {
    fontSize: 16,
    textAlign: "center",
    color: "#eee",
    fontWeight: "600",
  },
  authorItem: {
    fontSize: 14,
    textAlign: "center",
    color: "#eee",
    backgroundColor: "#282828",
    borderRadius: 8,
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
  },
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
  author: {
    fontSize: 16,
    color: "#808080",
    fontWeight: "600",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btnText: {
    padding: 16,
  },

  loading: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
