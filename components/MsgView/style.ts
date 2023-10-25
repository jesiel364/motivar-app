import styled from "styled-components/native";

interface CustomProps{
  theme: string
}

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: center;
  background-color: ${(props:CustomProps) => (props.theme === "Light" ? "#fff" : "#282828")};
`;
export const Card = styled.View`
  margin: 32px;
`;

export const Title = styled.Text`
    color: ${(props:CustomProps) => (props.theme === "Light" ? "#f4f4f4" : "#282828")};

  font-size: 24px;
  font-weight: 700;
  margin-top: 64px;
  text-align: left;
  margin-right: auto;
  margin-left: 16px;
  margin-bottom: 16px;
`;
export const Message = styled.Text`
  font-size: 22px;
  color: ${(props:CustomProps) => (props.theme === "Dark" ? "#f4f4f4" : "#282828")};


  font-weight: 400;
  max-height: 400px;
`;
export const Author = styled.Text`
  font-size: 16px;
  color: ${(props:CustomProps) => (props.theme === "Dark" ? "#f4f4f4" : "#282828")};

  font-weight: 600;
`;

export const ActionGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
`;
