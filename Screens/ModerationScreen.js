import {React, useState,useEffect} from 'react';
import { Image, Platform, Alert, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Styles } from '../assets/style';
import { auth } from '../firebase';
import ShowProfile from '../components/ShowProfile';
import EditProfile from '../components/EditProfile';
import UserVerification from './UserVerificationScreen';
import ShowUsers from '../components/ShowUsers';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfileScreen from './UserProfileScreen';


const Stack = createNativeStackNavigator();

const ModerationScreen=(navigation)=>{
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
        
        <Stack.Navigator initialRouteName="Moderation">
            <Stack.Screen name="User List" component={ShowUsers} options={{ headerShown: false }}/>
            <Stack.Screen name="User Profile" component={UserProfileScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      
        )
    }
    else {
        return(
            <UserVerification />
        )
    }

  }

  export default ModerationScreen;