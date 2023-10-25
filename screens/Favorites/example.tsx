import React, { useState } from "react";
import { View, Text, Pressable, Modal, Vibration} from "react-native";
import { Author, Item, Message } from "./style";
import { Checkbox } from "react-native-paper";

interface LongPressProps{
  theme?: any
  children?: any
  showCheck?: boolean
  setShowCheck?: boolean
}

const LongPressButton = ({children, theme, showCheck, setShowCheck }: LongPressProps) => {
  const [isPressing, setIsPressing] = useState(false);
  // const [showCheck, setShowCheck] = useState(false);
  const ONE_SECOND_IN_MS = 1000
  
  const PATTERN = [
    2 * ONE_SECOND_IN_MS,
    // 2 * ONE_SECOND_IN_MS 
  ];
  
  function vibrate(){
    return Vibration.vibrate(PATTERN, true)
  }
  const [check, setCheck] = useState(false)

  const handlePressIn = () => {
    setIsPressing(true)
    vibrate()
    setTimeout(() => {
      setShowCheck(!showCheck);
      
    }, 900);
  };

  const handlePressOut = () => {
    setIsPressing(false)

    // setShowMessage(false);
  };

  return (
   <>
      <Item theme={theme} onPressIn={handlePressIn} style={{
        backgroundColor: !isPressing ? '#f4f4f4' : '#f9f9f9',
        alignItems: 'center'
      }} onPressOut={handlePressOut}>
        
          

        

        {showCheck ? <Checkbox onPress={()=> {
            setCheck(!check)
        }} status={check ? "checked" : "unchecked"}/> : null}
        
        {children}

      </Item>
      {/* <Modal visible={showMessage} onRequestClose={() => setShowMessage(false)}>
        <View>
          <Text>Mensagem após 5 segundos</Text>
          <Item onPress={() => setShowMessage(false)}>
            <Text>Fechar</Text>
          </Item>
        </View>
      </Modal> */}
   </>
  );
};

export default LongPressButton;
