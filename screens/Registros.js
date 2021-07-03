import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GekoLogo from "../assets/gekoLogo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import ListReport from "../components/ReportList";
import { RegistrosStyles } from "../styles/General";

let data = [];

export default class Registros extends Component {
  render() {
    const arreglo = this.props.navigation.state.params;
    data.concat(Object.values(arreglo));
    const listar = () =>
      data.map((item, index) => {
        return <ListReport key={index} index={index} op={item} />;
      });

    return (
      <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
        <View style={RegistrosStyles.containerHeader}>
          <TouchableOpacity
            onPress={() => {
              data.splice(0);
              this.props.navigation.navigate("Login");
            }}
          >
            <Icon
              style={RegistrosStyles.searchIcon}
              name="arrow-circle-o-left"
              size={50}
              color="#000000"
            />
          </TouchableOpacity>
          <Image style={RegistrosStyles.img} source={GekoLogo} />
        </View>
        <View style={RegistrosStyles.containerHeader2}>
          <Text style={RegistrosStyles.titleReport}>Report</Text>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Calculator", data)}
              style={RegistrosStyles.btnCalculator}
            >
              <Icon
                style={RegistrosStyles.searchIcon}
                name="calculator"
                size={40}
                color="#ffffff"
              />
              <Text style={RegistrosStyles.titleCalculator}>Calculator</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={{ margin: 30, backgroundColor: "#ffffff", flex: 1 }}>
            {listar()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
