import {React, useState} from 'react';
import { Image, Platform, Alert, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Styles } from '../assets/style';
import { auth } from '../firebase';

export default function LogIn( {navigation} ) {
    const [UserName,setUserName]=useState('');
    const [email, onEmailChange] = useState("");
    const [Password, setPassword]=useState('');
    
    const handleLoginPress = () => {
      console.log('logging in')
      //perform our firebase auth function
      signInWithEmailAndPassword(auth, email, Password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        //Alert.alert(user.uid);
        //Navigate to next screen
        navigation.navigate("Home");

      }).catch((error) => {
        Alert.alert(error.message);
      })
  }

    return(
      <View style={Styles.container}>

        <Text style={Styles.pageHeading}>Log In</Text>
        <Text style={Styles.inputLabel}>Email</Text>

        <TextInput
        style={Styles.userInput}
        value={email}
        onChangeText={onEmailChange}
      />
        <Text style={Styles.inputLabel}>Password</Text>
        <TextInput style={Styles.userInput}
          onChangeText={(Password) =>
                  setPassword(Password)
                }
          value={Password}
          secureTextEntry={true}
        />

        <TouchableOpacity
            title="LogIn"
            onPress={handleLoginPress}
            style={Styles.button}
          >
            <Text style={Styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
      
    )
  }