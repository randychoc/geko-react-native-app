import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GekoLogo from "../assets/gekoLogo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import InputNumberBtn from "../components/InputNumberBtn";
import { CalculatorStyles } from "../styles/General";

const buttons = [
  ["C", "DEL", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["%", "0", ".", "="],
];
let arregloAux = [];

class Calculadora extends Component {
  constructor() {
    super();
    this.initialState = {
      displayValue: "0",
      operator: null,
      firstValue: "",
      secondValue: "",
      nextValue: false,
    };
    this.state = this.initialState;
    arregloAux.splice(0);
  }

  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return (
          <InputNumberBtn
            value={buttonItems}
            handleOnPress={this.handleInput.bind(this, buttonItems)}
            key={"btn-" + buttonIndex}
          />
        );
      });
      return (
        <View style={CalculatorStyles.inputRow} key={"row" + index}>
          {rowItem}
        </View>
      );
    });
    return layouts;
  }

  handleInput = (input) => {
    const { displayValue, operator, firstValue, secondValue, nextValue } =
      this.state;

    switch (input) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.setState({
          displayValue: displayValue === "0" ? input : displayValue + input,
        });
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input,
          });
        } else {
          this.setState({
            secondValue: secondValue + input,
          });
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        this.setState({
          nextValue: true,
          operator: input,
          displayValue: operator !== null ? displayValue : displayValue + input,
        });
        break;
      case ".":
        this.dot = displayValue.toString().slice(-1);
        this.setState({
          displayValue: this.dot !== "." ? displayValue + input : displayValue,
        });
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input,
          });
        } else {
          this.setState({
            secondValue: secondValue + input,
          });
        }
        break;

      case "=":
        this.result = eval(firstValue + operator + secondValue);
        this.auxResult =
          this.result % 1 === 0 ? this.result : this.result.toFixed(2);
        this.auxOpResult =
          firstValue + "" + operator + "" + secondValue + "=" + this.auxResult;
        arregloAux.push(this.auxOpResult);
        this.setState({
          displayValue: this.auxResult,
          firstValue: this.auxResult,
          secondValue: "",
          operator: null,
          nextValue: false,
        });
        break;

      case "C":
        this.setState(this.initialState);
        break;
      case "DEL":
        this.string = displayValue.toString();
        this.deleteString = this.string.substr(0, this.string.length - 1);
        this.length = this.string.length;
        this.setState({
          displayValue: this.length == 1 ? "0" : this.deleteString,
          firstValue: this.length == 1 ? "" : this.deleteString,
        });
        break;
    }
  };

  render() {
    const arreglo = this.props.navigation.state.params;
    arregloAux = arreglo;
    return (
      <View style={CalculatorStyles.container}>
        <View style={CalculatorStyles.containerHeader}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Registro", arregloAux);
            }}
            style={CalculatorStyles.btnLogin}
          >
            <Icon
              style={CalculatorStyles.searchIcon}
              name="arrow-circle-o-left"
              size={50}
              color="#000000"
            />
          </TouchableOpacity>
          <View style={CalculatorStyles.containerText}>
            <Image source={GekoLogo} style={CalculatorStyles.img} />
            <Text style={CalculatorStyles.text}>Calculator</Text>
          </View>
        </View>
        <View style={CalculatorStyles.container}>
          <View style={CalculatorStyles.resultContainer}>
            <Text style={CalculatorStyles.resultText}>
              {this.state.displayValue}
            </Text>
          </View>
          <View style={CalculatorStyles.inputContainer}>
            {this.renderButtons()}
          </View>
        </View>
      </View>
    );
  }
}

export default Calculadora;
