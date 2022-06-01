import {React, useState} from 'react';
import { Image, Platform, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';

import { Styles } from '../assets/style';

const LogInScreen=()=>{
    const [UserName,setUserName]=useState('');
    const [Password, setPassword]=useState('');    
    return(
      <View style={Styles.container}>

        <Text style={Styles.pageHeading}>Log In</Text>
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
            title="LogIn"
            onPress={() => navigation.navigate('BottomNav', { screen: 'Home' })}
            style={Styles.button}
          >
            <Text style={Styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
      
    )
  }

export default LogInScreen;
