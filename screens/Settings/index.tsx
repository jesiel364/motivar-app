import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import MotiCard from "../../components/MotiCard";
import { useContext, useEffect, useState } from "react";
import ViewController from "../../ViewController";
import { MyContext } from "../../Global/Context";
import { SettingsContainer, Title, Option, DEV, Version } from "./style";
import Dark from "../../Global/dark";
import { Appearance } from "react-native";
import SettingsViewController from "./viewController";

// console.log(Appearance.getColorScheme);

const Settings = () => {
  //  const {theme, setTheme} = ViewController()
  const { theme, setTheme, handleTheme, settingList, textColor } =
    SettingsViewController();

  return (
    <SettingsContainer theme={theme}>

      {settingList.map((item, ) => (
        <>
          <Title theme={theme} key={item.id}>
            {item.title}
          </Title>
          
          {item.options.map((option, ) => (
            <>
              <Option
                theme={theme}
                key={option.id}
                onPress={() => (option.callback ? option.callback() : null)}
              >
                <Text
                  style={{
                    color:
                      theme === option.value ? Dark.COLORS.GREEN : textColor(),
                    fontSize: 16,
                    fontWeight: "400",
                    padding: 16,
                  }}
                >
                  {option.label}
                </Text>
              </Option>
            </>
          ))}
        </>
      ))}

      {/* <DEV theme={theme}>Jesiel</DEV> */}
      <Version theme={theme}>V2.0.1</Version>
    </SettingsContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Dark.COLORS.BACKGROUND,
    alignItems: "center",
    padding: 16,
  },

  title: {
    color: Dark.COLORS.TEXT_PRIMARY,
    fontSize: 22,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "left",
    marginRight: "auto",
  },
  label: {},

  option: {
    backgroundColor: Dark.COLORS.PRIMARY800,
    display: "flex",
    width: "100%",
    // margin: 4,
    borderRadius: 8,
  },

  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
  },
  a: {
    fontSize: 32,
    color: Dark.COLORS.TEXT_PRIMARY,
    fontWeight: "600",
    marginBottom: "auto",
  },
});

export default Settings;
