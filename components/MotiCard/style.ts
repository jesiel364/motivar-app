import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: 22;
  color: ${(props) => (props.theme === "Light" ? "#000" : "#fefefe")};
  font-weight: 600;
  max-height: 400px;
  text-align: left;
`;
export const ActionsGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
`;
