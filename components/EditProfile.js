import {React, useState, useEffect} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import {FAB} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { Styles } from '../assets/style';
import { auth } from '../firebase';



const EditProfile=(navigation)=>{

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        //user is logged in
        setLoggedIn(true)

      } else {
        //user is logged out
        setLoggedIn(false)
        navigation.navigate('LogIn')
      }
    })

    return unsubscribe;
  }, []);

  //Listening to if our current User is logged in

  return(
    <View style={Styles.container}>
        <Text style={Styles.entrytitle}>UserName:</Text>
        <TextInput placeholder={auth.currentUser.displayName} style={Styles.entrytitle}></TextInput>
        <Text style={Styles.entrytitle}>Email:</Text>
        <TextInput placeholder={auth.currentUser.email} style={Styles.entrytitle}></TextInput>

        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

    </View>
  )
}

  export default EditProfile;