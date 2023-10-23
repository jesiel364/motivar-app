import { useContext } from "react";
import { MyContext } from "../../Global/Context";

const FavoritesViewController = () => {

    const {theme} = useContext(MyContext)

    function isLight() {
        if (theme === "Light") {
          return true;
        } else {
          return false;
        }
      }
    return {
        isLight
    }
}

export default FavoritesViewController