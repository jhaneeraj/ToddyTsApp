// SignUp.js
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  SectionList

} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox'

let value: any;


function SignUp(props) {

  // maintain local state
  const [value, setValue] = useState({ userName: '', password: '', checked: false, email: '', phone_number: '' });
  const [isSelected, setSelection] = useState(false);





  return (
    <View style={styles.centeredView}>
      <Input placeholder='Name' style={styles.Input} defaultValue={value.userName}
        onChangeText={(val) => onChangeValue('userName', val)}
        leftIcon={
          <Icon name='user' size={24} color='black' />} />
      <Input placeholder='Email Id' defaultValue={value.email}
        onChangeText={(val) => onChangeValue('email', val)}
        leftIcon={
          <Icon name='inbox' size={24} color='black' />} />
      <Input placeholder='Mobile Number' defaultValue={value.phone_number}
        onChangeText={(val) => onChangeValue('phone_number', val)}
        leftIcon={
          <Icon name='mobile' size={30} color='black' />} />
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={isSelected} onValueChange={setSelection}
        />
        <Text style={styles.checkBoxText}>I'm Above 25 yrs and I accept All Terms & Conditions</Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={registerUser} activeOpacity={0.55} style={styles.button} >
          <Text style={styles.text}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        {/* <Button
          title="Go to Home... again"
          onPress={() => props.navigation.navigate('Home')}
        /> */}
      </View>
    </View>);

  function onChangeValue(key: any, val: any) {
    value[key] = val;
    setValue(value);

  }

  function registerUser() {
    Alert.alert(`User ${value.userName} Registered`);
    props.navigation.navigate('Login');
  }
}

export default SignUp;

const styles = StyleSheet.create({
  centeredView: {
    flexDirection: 'column',
    justifyContent: "center",
    color: '#000000',
    top: "20%",
  },
  Input: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: 'black'
  },
  buttonStyle: {
    flex: 1,
    borderBottomWidth: 2
  },
  button: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    padding: 1,
    margin: 20
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  checkBoxText: {
    fontSize: 17,
    color: "black"
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
})