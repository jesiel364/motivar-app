import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Global/Context";
import ViewController from "../../ViewController";

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

  return {
    isLight,
    messageAuthor,
    randomMessageByAuthor,
  };
};
