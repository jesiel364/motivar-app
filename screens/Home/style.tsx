import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  color: ${(props) => (props.theme === "Light" ? "#000" : "#fefefe")};
  background-color: ${(props) =>
    props.theme === "Light" ? "#fff" : "#000"};
  color: white;
  align-items: center;
  justify-content: center;
`;
