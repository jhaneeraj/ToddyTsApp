import React from 'react';
import ImageSlider from "react-native-image-slider";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen({ navigation })  {
  var images: any;

  // constructor(props) {
  //   super(props);
    images = [
      "https://source.unsplash.com/1024x768/?mojito",
      "https://source.unsplash.com/1024x768/?beer",
      "https://source.unsplash.com/1024x768/?drink",
      "https://source.unsplash.com/1024x768/?beverages", // Network image
      //require('./assets/images/girl.jpg'),          // Local image
    ];


  // }

  //render() {

    return (
      <View style={styles.container}>
        <ImageSlider loopBothSides
          autoPlayWithInterval={3000} images={images} />

        <View style={styles.rowContainer}>
          <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} activeOpacity={0.55} style={styles.button} >
              <Text style={styles.text}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} activeOpacity={0.55} style={styles.button}>
              <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>


    )
  //}



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonStyle: {
    flex: 1,
    borderBottomWidth: 2
  },
  button: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    padding: 1
  },
  text: {
    fontSize: 20,
    color: "#FFFF"
  }

});

export default HomeScreen;