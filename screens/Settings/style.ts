import styled from "styled-components/native";
import dark from "../../Global/dark";

export const SettingsContainer = styled.View`
  flex: 1;
  background-color: ${(props) =>
    props.theme === "Light" ? "#fefefe" : "#282828"};
  align-items: center;
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${(props) => (props.theme === "Light" ? "#434343" : "#fff")};

  font-size: 22px;
  font-weight: 600;
  margin-top: 8px;
  text-align: left;
  margin-right: auto;
`;

export const Option = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.theme === "Light" ? "#f4f4f4" : "#363636"};
  /* background-color: red; */

  display: flex;
  width: 100%;
  margin: 4px;
  border-radius: 8px;
`;

export const Version = styled.Text`
  color: ${(props) => (props.theme === "Light" ? "#676767" : "#eee")};

  font-size: 16px;
  font-weight: 200;
  text-align: center;
  margin-top: auto;
  margin-bottom: 8px;

`;

export const DEV = styled.Text`
  color: ${(props) => (props.theme === "Light" ? "#676767" : "#eee")};

  font-size: 16px;
  font-weight: 200;
  margin-top: 8px;
  text-align: center;

  
`;