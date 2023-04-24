import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    backgroundColor: "powderblue",
    borderWidth: "2",
    borderColor: "black",
    width: "100%",
    borderRadius: 10,
  },
  input: {
    width: 200,
    height: 50,
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 10,
  },
  buttons: {
    height: 30,
    width: 30,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    paddingHorizontal: 10,
  },
});

export { styles };
