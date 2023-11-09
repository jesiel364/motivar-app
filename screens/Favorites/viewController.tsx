import { useContext } from "react";
import { MyContext } from "../../Global/Context";
import {Share,
  Alert,
} from "react-native";

const FavoritesViewController = () => {
  const { theme } = useContext(MyContext);

  function isLight() {
    if (theme === "Light") {
      return true;
    } else {
      return false;
    }
  }
  
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
  return {
    isLight,
    send
  };
};

export default FavoritesViewController;
