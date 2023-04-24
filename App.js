import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./assets/styles/styles1";
import { TextInput } from "react-native";

export default function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");
  const [messageError, setmessageError] = useState("");
  const [showResult, setShowResult] = useState("");

  const generarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 101);
    if (!value1) {
      setValue1(numeroAleatorio.toString());
    } else {
      setValue2(numeroAleatorio.toString());
    }
  };

  const calculate = (operator) => {
    if (value1 != "" && value2 != "") {
      let memoryResult = 0;
      switch (operator) {
        case "+":
          memoryResult = parseFloat(value1) + parseFloat(value2);
          break;
        case "-":
          memoryResult = parseFloat(value1) - parseFloat(value2);
          break;
        case "*":
          memoryResult = parseFloat(value1) * parseFloat(value2);
          break;
        case "/":
          memoryResult = parseFloat(value1) / parseFloat(value2);
          break;
        case "^":
          memoryResult = parseFloat(value1) ** parseFloat(value2);
          break;
        case "√":
          memoryResult = Math.pow(value2, 1 / value1);
          break;
      }
      setResult(memoryResult.toFixed(2));
      setmessageError("");
    } else {
      setmessageError("Debe ingresar los 2 valores");
    }
    setShowResult(operator);
  };

  const handleEqual = () => {
    if (value1 && value2 && showResult) {
      calculate(showResult);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.fondo,
          { flex: 1, backgroundColor: "#d7a9e3", flexDirection: "row" },
        ]}
      >
        <Image
          style={{ width: 100, height: 100, resizeMode: "stretch" }}
          source={require("./assets/images/calculator.png")}
        />
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 30,
            marginTop: 40,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Calculadora Básica
        </Text>
      </View>
      <View
        style={[
          styles.fondo,
          { flex: 4, alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            marginBottom: 10,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Empieza con tus Cálculos
        </Text>
        <TextInput
          placeholder="Ingrese valor 1"
          style={[
            styles.input,
            { marginBottom: 10, fontWeight: "500", fontStyle: "italic" },
          ]}
          onChangeText={(value) => setValue1(value)}
          value={value1}
        />
        <TextInput
          placeholder="Ingrese valor 2"
          style={[
            styles.input,
            { marginBottom: 10, fontWeight: "500", fontStyle: "italic" },
          ]}
          onChangeText={(value) => setValue2(value)}
          value={value2}
        />
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>Resultado</Text>
        <Text>{result}</Text>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "#B2FFB2" }]}
            onPress={() => calculate("+")}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "red" }]}
            onPress={() => calculate("-")}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "#FDFD96" }]}
            onPress={() => calculate("*")}
          >
            <Text>*</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "orange" }]}
            onPress={() => calculate("/")}
          >
            <Text>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "white" }]}
            onPress={() => handleEqual()}
          >
            <Text>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "pink" }]}
            onPress={() => {
              setValue1("");
              setValue2("");
              setResult("");
            }}
          >
            <Text
              style={{
                fontWeight: "600",
              }}
            >
              C
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "#8a65aa" }]}
            onPress={() => calculate("√")}
          >
            <Text>√</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "#bcbcbc" }]}
            onPress={() => calculate("^")}
          >
            <Text>^</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "#87ceeb" }]}
            onPress={generarNumeroAleatorio}
          >
            <Text
              style={{
                fontWeight: "600",
              }}
            >
              R
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}></View>
        <Text style={{ color: "red" }}>{messageError}</Text>
      </View>

      <View style={[styles.fondo, { flex: 1, backgroundColor: "#f9a87d" }]}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Derechos Reservados
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 14,
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          Valentina Atehortúa Zapata
        </Text>
      </View>
    </View>
  );
}
