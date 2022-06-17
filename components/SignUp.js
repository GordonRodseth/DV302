import {React, useState} from 'react';
import { Alert, ActivityIndicator, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
import { createUserOnRegister } from '../services/Database';
import { Styles } from '../assets/style';

export default function SignUp({navigation}){
  const [errormessage,setErrorMessage]=useState("");
  const [username, onUsernameChange] = useState("");
  const [UserEmail, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");

    const [loading, setLoading] = useState(false);
    
    const handleSignUpPress = () => {
      //perform our firebase auth function
      setLoading(true);
      
      //create user function (auth instance, email, and password)
      createUserWithEmailAndPassword(auth, UserEmail, password)
        .then(() => {
          //executes when creation success
      
          createUserOnRegister(username);
        

          //setLoading(false);
          
          //Navigate to next screen
          navigation.navigate("Home");


        })
        .catch((error) => {
          //executes when failure
          Alert.alert(error.message);
          setErrorMessage(error);
          setLoading(false);
        });

  }

    return(
      <View style={Styles.container}>
        {errormessage ? (
          <>
          <Text style={Styles.entrytitle}>{errormessage}</Text>
          </>
        ):(
          <></>
        )}
        

        <Text style={Styles.pageHeading}>Sign Up</Text>
        <Text style={Styles.inputLabel}>Email</Text>
        <TextInput style={Styles.userInput}
          onChangeText={onEmailChange}
          value={UserEmail}
        />

        <Text style={Styles.inputLabel}>Username</Text>
        <TextInput style={Styles.userInput}
          onChangeText={onUsernameChange}
          value={username}
        />

        <Text style={Styles.inputLabel}>Password</Text>
        <TextInput style={Styles.userInput}
          onChangeText={onPasswordChange}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity
            title="SignUp"
            onPress={handleSignUpPress}
            style={Styles.button}
          >
            <Text style={Styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
      
    )
  }

