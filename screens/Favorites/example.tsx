import React, { useState, useContext } from "react";
import { View, Text, Pressable, Modal, Vibration, TouchableOpacity } from "react-native";
import { Author, Item, Message } from "./style";
import { Checkbox } from "react-native-paper";
import { MyContext } from "../../Global/Context";
interface LongPressProps {
  // theme?: any;
  children?: any;
  // showCheck?: boolean;
  // setShowCheck?: boolean;
  navigation?: any
  data?: any
  openModal?: boolean
  setOpenModal?: any
  handleItemPress?: void
}

const LongPressButton = ({
  children,
  navigation,
  data,
  openModal,
  setOpenModal,
  handleItemPress
  // theme,
  // showCheck,
  // setShowCheck,
}: LongPressProps) => {
  const {showCheck, setShowCheck, theme} = useContext(MyContext)
  const ONE_SECOND_IN_MS = 1000;


  function vibrate() {
    return Vibration.vibrate(2000, true);
  }
  const [check, setCheck] = useState(false);

function handleLongPress(){
  // vibrate()
  setShowCheck(true)
}

function handlePress(item:any){
  if(!showCheck){
    handleItemPress(item)
  }else{
    setCheck(!check);
  }

}


  return (
    <>
 
      <Item
        onPress={() => handlePress(data)}
        onLongPress={() => handleLongPress()}
        theme={theme}
        // onPressIn={handlePressIn}
        // style={{
        //   backgroundColor: isPressing ?  '#e0e0e0' : '#f4f4f4'
        // }}
        // onPressOut={handlePressOut}
      >
        {showCheck ? (
          <Checkbox
            onPress={() => {
              setCheck(!check);
            }}
            status={check ? "checked" : "unchecked"}
          />
        ) : null}

        {children}
      </Item>

    </>
  );
};

export default LongPressButton;
