import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ToastAndroid,
} from "react-native";
import MotiCard from "../../components/MotiCard";
import { useContext, useEffect, useState } from "react";
import ViewController from "../../ViewController";
import { MyContext } from "../../Global/Context";
import { SettingsContainer, Title, Option } from "./style";
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
      {settingList.map((item, index) => (
        <>
          <Title theme={theme} key={item.title}>
            {item.title}
          </Title>
          {item.options.map((option, index) => (
            <>
              <Option
                theme={theme}
                key={option.label}
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
