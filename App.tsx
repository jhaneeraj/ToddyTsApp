import React, { Component } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import HomeScreen from './src/modules/homeScreen';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './src/modules/signUp';
import Login from './src/modules/login';
import Dashboard from './src/modules/dashboard';

const StackNav = createStackNavigator();


export default class App extends React.Component {


  componentDidMount() {
    SplashScreen.hide();
  }

  render() {


    //  LogBox.ignoreAllLogs(true);
    return (
      <NavigationContainer>
        <StackNav.Navigator initialRouteName="Home">
          <StackNav.Screen  name="Home" component={HomeScreen}></StackNav.Screen>
          <StackNav.Screen name="SignUp" component={SignUp}></StackNav.Screen>
          <StackNav.Screen name="Login" component={Login}></StackNav.Screen>
          <StackNav.Screen name="Dashboard" component={Dashboard}></StackNav.Screen>
        </StackNav.Navigator>
      </NavigationContainer>)
  };
}


const styles = StyleSheet.create({

});


