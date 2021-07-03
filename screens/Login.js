import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GekoLogo from '../assets/gekoLogo.png';
import ShareLogo from '../assets/shareIcon.png';
import { LoginStyles } from '../styles/General';

export default class Login extends Component {
  render() {    
    return (
      <View style={LoginStyles.container1}>
        <View style={LoginStyles.container}>
          <Image source={ShareLogo} style={LoginStyles.imgShare} />
        </View>
        <View style={LoginStyles.container2}>
          <Image source={GekoLogo} style={LoginStyles.img} />
          <View style={LoginStyles.searchSection}>
            <Icon
              style={LoginStyles.searchIcon}
              name="user"
              size={25}
              color="#808080"
            />
            <TextInput
              style={LoginStyles.input}
              placeholder="User"
              onChangeText={(searchString) => {
                this.setState({ searchString });
              }}
            />
          </View>
          <View style={LoginStyles.searchSection}>
            <Icon
              style={LoginStyles.searchIcon}
              name="lock"
              size={25}
              color="#808080"
            />
            <TextInput
              style={LoginStyles.input}
              placeholder="Password"
              onChangeText={(searchString) => {
                this.setState({ searchString });
              }}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Registro', [])}
            style={LoginStyles.btnLogin}>
            <Text style={LoginStyles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
