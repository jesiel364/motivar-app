import { useContext } from "react";
import { MyContext } from "../../Global/Context";

export const MsgViewController = () => {
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


