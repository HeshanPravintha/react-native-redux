import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => {
    const handlePress = () => {
      console.log('Button Pressed!'); // Logging the button press
      onPress();
    };
    return (
        <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
      );
    };
    const styles = StyleSheet.create({
        
        button: {
          backgroundColor: 'blue',
          width: 350,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          top: 50,
        },
        buttonText: {
          fontSize: 24,
          color: 'white',
          fontWeight: '700'
        },
      });
      export default Button;