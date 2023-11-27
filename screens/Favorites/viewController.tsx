import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../Global/Context";
import { Share, Alert } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";

const FavoritesViewController = () => {
  const { theme, total, selectedItems, setSelectedItems, setShowCheck } =
    useContext(MyContext);

const navigation = useNavigation()

  function isLight() {
    if (theme === "Light") {
      return true;
    } else {
      return false;
    }
  }

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response: any = await getItem();
    const responseData = JSON.parse(response);
    setData(responseData);
  }

  useEffect(() => {
    handleFetch();
  });

  async function send(frase: any) {
    try {
      const result = await Share.share({
        message: `${frase.texto} - ${frase.autor}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  const { getItem, setItem } = useAsyncStorage("@messages:favorites");

  async function handleRemove(texto) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item) => texto !== item.texto);
    setItem(JSON.stringify(data));
    // ToastAndroid.show("Item excluido", ToastAndroid.SHORT);
    handleFetch();
  }

  const [check, setCheck] = useState(false);


  async function deleteMultiples() {
    if (selectedItems.length !== 0) {
      selectedItems.map((item) => {
        console.log(item);
        handleRemove(item.texto);
      });
      setSelectedItems([]);
      setShowCheck(false);
    }
    // if(selectedItems.length){
    //   handleRemove(selectedItems[0].texto)
    // }
  }

  const [openModal, setOpenModal] = useState<boolean>(false);

function onCloseCheckMode(navi){
  setShowCheck(false) 
  setSelectedItems([])
  setCheck(false)
  navi.navigate('favorites')
}

  return {
    isLight,
    send,
    handleFetch,
    handleRemove,
    data,
    setData,
    setItem,
    getItem,
    deleteMultiples,
    openModal,
    setOpenModal,
    check, 
    setCheck,
    onCloseCheckMode
  };
};

export default FavoritesViewController;
