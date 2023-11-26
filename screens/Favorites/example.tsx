import React, { useState, useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  Vibration,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Author, Item, Message } from "./style";
import { Checkbox } from "react-native-paper";
import { MyContext } from "../../Global/Context";
interface LongPressProps {
  // theme?: any;
  children?: any;
  // showCheck?: boolean;
  // setShowCheck?: boolean;
  navigation?: any;
  data?: any;
  openModal?: boolean;
  setOpenModal?: any;
  handleItemPress?: void;
  setSelectedItems: any;
  selectedItems: any;
}

const LongPressButton = ({
  children,
  navigation,
  data,
  openModal,
  setOpenModal,
  handleItemPress,
  // theme,
  // showCheck,
  // setShowCheck,,
  setSelectedItems,
  selectedItems,
}: LongPressProps) => {
  const { showCheck, setShowCheck, theme } = useContext(MyContext);

  const [check, setCheck] = useState(false);

  function handleLongPress() {
    setShowCheck(true);
  }

  function handlePress(item: any) {
    if (!showCheck) {
      handleItemPress(item);
    } else {
      setCheck(!check);
      selectedItems.push(item);
    }
  }

  let [l, setL] = useState([]);

  function onCheckPress(data: any) {
    setSelectedItems((prevItems) => [...prevItems, data]);
    setCheck(!check);
  }
  function onRemoveCheck(data: any) {
    const newData = selectedItems.filter((item) => item.texto !== data.texto);
    setSelectedItems((prevItems) => newData);
    setCheck(!check);
  }

  function onPress() {
    if (showCheck) {
      if (check) {
        onRemoveCheck(data);
      } else {
        onCheckPress(data);
      }
    } else {
      navigation.navigate("favoritesView", { data: data});
    }
  }

  const elementoRef = useRef();

  return (
    <>
      <Item
        onPress={() => onPress()}
        onLongPress={() => handleLongPress()}
        theme={theme}
        checkMode={showCheck}
        check={check}
        // onPressIn={handlePressIn}
        // style={{
        //   backgroundColor: isPressing ?  '#e0e0e0' : '#f4f4f4'
        // }}
        // onPressOut={handlePressOut}
      >
      
      
         

        {children}
      </Item>
    </>
  );
};

export default LongPressButton;
