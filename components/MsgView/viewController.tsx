import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Global/Context";
import ViewController from "../../ViewController";
import { ToastAndroid } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export const MsgViewController = () => {
  const { theme, author } = useContext<any>(MyContext);
  const { GetMessageByAuthor, messageAuthor } = ViewController();
  const [randomMessageByAuthor, setRandomMessageByAuthor] = useState<any>();

  // useEffect(() => {
  //   GetMessageByAuthor(author);
  //   const randomFlow = Math.floor(
  //     Math.random() * messageAuthor?.frases?.length - 1
  //   );
    


  //     setRandomMessageByAuthor(messageAuthor?.frases[randomFlow]);
    
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      if(!messageAuthor){
        await GetMessageByAuthor(author);
      }
      
  
      if (messageAuthor && messageAuthor.frases) {
        const randomFlow = Math.floor(Math.random() * messageAuthor.frases.length - 1);
        setRandomMessageByAuthor(messageAuthor.frases[randomFlow]);
      }
    };
  
    fetchData();
  }, [messageAuthor]); 


  function isLight() {
    if (theme === "Light") {
      return true;
    } else {
      return false;
    }
  }

  const { getItem, setItem } = useAsyncStorage("@messages:favorites");
  const [fav, setFav] = useState(false);
  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  async function handleLikePress(frase) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const filt = previousData.filter((item) => item.texto === frase.texto);

    const data = [...previousData, frase];

    // setFav(!fav);
    if (filt.length < 1) {
      setFav(true)
      await setItem(JSON.stringify(data));
      // await AsyncStorage.setItem('@messages:favorites', JSON.stringify(frase))
      showToast("Adicionado aos favoritos!");
    }else{
      setFav(true)
    }
  }

  return {
    isLight,
    messageAuthor,
    randomMessageByAuthor,
    handleLikePress,
    fav
  };
};
