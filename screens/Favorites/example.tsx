import React, { useState, useContext, useEffect } from "react";
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
  selectedItems: any
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
  // setShowCheck,,
  ,
  selectedItems
}: LongPressProps) => {
  const {showCheck, setShowCheck, theme} = useContext(MyContext)
  
  const [check, setCheck] = useState(false);
  const [total, setTotal] = useState<number>(0);

function handleLongPress(){
  setShowCheck(true)
}

function handlePress(item:any){
  if(!showCheck){
    handleItemPress(item)
  }else{
    setCheck(!check);
    selectedItems.push(item)
  }

}

function onCheckPress(data: any){
  setCheck(!check);
  selectedItems.push(data)
  console.log(selectedItems.length)
}

useEffect(() => {
  
    setTotal(selectedItems.length)
  
})


  return (
    <>
        
      <Item
        onPress={() => handlePress(data)}
        onLongPress={() => handleLongPress()}
        theme={theme}
        checkMode={showCheck}
        // onPressIn={handlePressIn}
        // style={{
        //   backgroundColor: isPressing ?  '#e0e0e0' : '#f4f4f4'
        // }}
        // onPressOut={handlePressOut}
      >
        {showCheck ? (
          <Checkbox
          value={data}
            onPress={() => {
              onCheckPress(data)
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
