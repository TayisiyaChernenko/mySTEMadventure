'use strict';
import { StyleSheet, Dimensions } from 'react-native';

{
    /* get screen dimensions */
  }
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  module.exports = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    background_image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    logo: {
      width: windowWidth,
      height: 115,
      resizeMode: 'cover',
      paddingBottom: 30,
    },
    title: {
      fontFamily: 'Barlow_Regular',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 20,
      fontSize: 38,
    },
  });
  