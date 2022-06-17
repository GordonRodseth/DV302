import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import { useState } from 'react/cjs/react.production.min';
import { Styles } from '../assets/style';
import AddPost from '../Screens/AddPostScreen';

const Tab = createBottomTabNavigator();

const UserVerification=()=>{
    return(
  
      <Tab.Navigator  
      initialRouteName="Log In"
      screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'#EA52B3',
        tabBarStyle:{
          backgroundColor:'black',
          padding:10,
          paddingBottom:15,
          height: 70,
        }
          
      }}
        >
        <Tab.Screen 
          name="Log In" 
          component={LogIn} 
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("../assets/icons/login.svg")} style={{width: 30, height: 30}} />),
            tabBarLabelStyle: {        
              fontFamily: 'VT323', 
              fontSize: 15 ,
            }
            }}/>
        <Tab.Screen 
          name="Sign Up" 
          component={SignUp} 
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("../assets/icons/signup.svg")} style={{width: 30, height: 30}} />),
            tabBarLabelStyle: {        
              fontFamily: 'VT323', 
              fontSize: 15 ,
            }
            }}/>
      </Tab.Navigator>
  
    )
  }
export default UserVerification;