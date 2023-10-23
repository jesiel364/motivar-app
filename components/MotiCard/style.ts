import styled from "styled-components/native";

export const Message = styled.Text`
  font-size: 22px;
  color: ${(props) => (props.theme === "Light" ? "#363636" : "#fefefe")};
  font-weight: 400;
  max-height: 400px;
  text-align: left;
`;
export const Author = styled.Text`
    font-size: 16px;
    color: #808080;
    font-weight: 400;
    font-style: italic;
    text-align: right;
`;
export const ActionsGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
`;
