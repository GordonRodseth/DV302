import {React, useState,useEffect} from 'react';
import { Image, Platform, Alert, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Styles } from '../assets/style';
import { auth } from '../firebase';
import ShowProfile from '../components/ShowProfile';
import EditProfile from '../components/EditProfile';
import UserVerification from './UserVerificationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const ProfileScreen=(navigation)=>{
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
          //user is logged in
          setLoggedIn(true)
  
        } else {
          //user is logged out
          setLoggedIn(false)
        }
      })
  
      return unsubscribe;
    }, []);
    if(loggedIn){
        return(
        <Stack.Navigator initialRouteName="Show Profile">
            <Stack.Screen name="Show Profile" component={ShowProfile} options={{ headerShown: false }}/>
            <Stack.Screen name="Edit Profile" component={EditProfile} options={{ headerShown: false }}/>
        </Stack.Navigator>
        
        )
    }
    else {
        return(
            <UserVerification />
        )
    }

  }

  export default ProfileScreen;