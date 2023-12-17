import React, { useState, useContext, useEffect, useRef } from "react";

import { Author, Check, Item, Message } from "./style";
import { MyContext } from "../../Global/Context";
import FavoritesViewController from "./viewController";
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
  list: any;
  item: any
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
  list,
  item
}: LongPressProps) => {
  const { showCheck, setShowCheck, theme } = useContext(MyContext);


  const { check, setCheck } = FavoritesViewController();

  function handleLongPress() {
    setShowCheck(true);
  }

  let [l, setL] = useState([]);

  function onCheckPress(data: any) {
    if (!selectedItems.includes(data)) {
      setSelectedItems((prevItems) => [...prevItems, data]);
      setCheck(!check);
    }
  }
  function onRemoveCheck(data: any) {
    const newData = selectedItems.filter((item) => item.texto !== data.texto);
    setSelectedItems((prevItems) => newData);
    setCheck(!check);
  }

  // console.log(data)

  function onPress() {
    if (showCheck) {
      if (check) {
        onRemoveCheck(data);
      } else {
        onCheckPress(data);
      }
    } else {
      navigation.navigate("favoritesView", { data: item });
    }
  }

  // console.log(data)



  return (
    <>
      <Item
        onPress={() => onPress()}
        // onLongPress={() => handleLongPress()}
        theme={theme}
        checkMode={showCheck}
        check={data.check}
        // style={{
        //   backgroundColor: showCheck && check ? 'red' : theme === "Dark" ? "#363636" : "#f4f4f4"
        // }}
        // onPressIn={handlePressIn}
        // style={{
        //   backgroundColor: isPressing ?  '#e0e0e0' : '#f4f4f4'
        // }}
        // onPressOut={handlePressOut}
      >
        {/* { showCheck ? (
          <Checkbox.Item label="" status={check ? 'checked' : 'unchecked'} />
        ) : null} */}

        {children}
      </Item>
    </>
  );
};

export default LongPressButton;
