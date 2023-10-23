import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => (props.theme === "Light" ? "#fff" : "#363636")};
`;

export const Header = styled.View`
  background-color: #282828;
`;

export const Title = styled.Text`

  color: #eee;
  font-size: 24px;
  font-weight: 700;
  margin-top: 8px;
  text-align: left;
  margin-right: auto;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const OrderItem = styled.Pressable`
  background-color: #282828;
  padding: 16px;
  border-radius: 16px;
  height: 100px;
`;

export const GridLabel = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #eee;
  font-weight: 200;
`;
export const GridIcon = styled.Text`
  font-size: 26px;
  text-align: center;
`;
export const AuthorItem = styled.Text`
  font-size: 14px;
  text-align: center;
  background-color: ${(props) =>
    props.theme === "Light" ? "#f4f4f4" : "#282828"};
  color: ${(props) =>
    props.theme === "Light" ? "#282828" : "#f4f4f4"};
  
  padding: 8px;
  display: flex;
  height: 76px;
  border-radius: 8px;
  
`;

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#282828",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fefefe",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // minWidth: '100vw'
  },

  title: {
    color: "#eee",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 64,
    textAlign: "left",
    marginRight: "auto",
    marginLeft: 16,
    marginBottom: 16,
  },

  grid: {},

  gridLabel: {
    fontSize: 16,
    textAlign: "center",
    color: "#eee",
    fontWeight: "600",
  },
  authorItem: {
    fontSize: 14,
    textAlign: "center",
    color: "#eee",
    backgroundColor: "#282828",
    borderRadius: 8,
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
  },
  gridIcon: {
    fontSize: 26,
    textAlign: "center",
  },

  orderItem: {
    backgroundColor: "#282828",
    padding: 16,
    borderRadius: 16,
    // width: 120,
    height: 100,
  },
  Card: {
    margin: 32,
  },
  Text: {
    fontSize: 22,
    color: "#fefefe",
    fontWeight: "400",
    maxHeight: 400,
  },
  author: {
    fontSize: 16,
    color: "#808080",
    fontWeight: "600",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btnText: {
    padding: 16,
  },

  loading: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
