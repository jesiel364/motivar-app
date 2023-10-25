import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { Author, Item, Message } from "./style";
import { Checkbox } from "react-native-paper";

const LongPressButton = ({children}) => {
  const [isPressing, setIsPressing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [check, setCheck] = useState(false)

  const handlePressIn = () => {
    setIsPressing(true)
    setTimeout(() => {
      setShowMessage(!showMessage);
    }, 2000);
  };

  const handlePressOut = () => {
    setIsPressing(false)

    // setShowMessage(false);
  };

  return (
    <View>
      <Item onPressIn={handlePressIn} style={{
        backgroundColor: !isPressing ? '#f4f4f4' : '#f9f9f9',
        alignItems: 'center'
      }} onPressOut={handlePressOut}>
        
          

        

        {showMessage ? <Checkbox onPress={()=> {
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
    </View>
  );
};

export default LongPressButton;
