import {React, useState} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Styles } from '../assets/style';

const SignUpScreen=()=>{
    const [UserName,setUserName]=useState('');
    const [Password, setPassword]=useState('');
    const [UserEmail, setUserEmail]=useState('');    
    return(
      <View style={Styles.container}>

        <Text style={Styles.pageHeading}>Sign Up</Text>
        <Text style={Styles.inputLabel}>Email</Text>
        <TextInput style={Styles.userInput}
          onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
          value={UserEmail}
        />

        <Text style={Styles.inputLabel}>Username</Text>
        <TextInput style={Styles.userInput}
          onChangeText={(UserName) =>
                  setUserName(UserName)
                }
          value={UserName}
        />

        <Text style={Styles.inputLabel}>Password</Text>
        <TextInput style={Styles.userInput}
          onChangeText={(Password) =>
                  setPassword(Password)
                }
          value={Password}
        />

        <TouchableOpacity
            title="SignUp"
            onPress={() => navigation.navigate('BottomNav', { screen: 'Home' })}
            style={Styles.button}
          >
            <Text style={Styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
      
    )
  }

export default SignUpScreen;
