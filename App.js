import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entries from './components/Entries';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CategoriesScreen from './Screens/CategoriesScreens';
//import AddPostScreen from './Screens/AddPostScreen';
import { useState, us} from 'react/cjs/react.production.min';
import { Styles } from './assets/style';
import AddPost from './Screens/AddPostScreen';

import { auth } from './firebase';
import { getUserFromId } from './services/Database';
import ModerationScreen from './Screens/ModerationScreen';

const Tab = createBottomTabNavigator();

const BottomNav=(navigation)=>{
  
  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={{
        headerStyle:{
          backgroundColor:'black',
          padding:10,
          height: 70,
          textAlign:'center',
          alignItems:'center',
        },
        headerTitleStyle:{
          fontFamily: 'VT323', 
          fontSize: 50 ,
          color:'white',
          textAlign:'center',
          alignItems:'center',
        },
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'#EA52B3',
        tabBarStyle:{
          backgroundColor:'black',
          padding:10,
          height: 70,
        }
        
      }}
    >

      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
                    tabBarIcon: () => (<Image source={require("./assets/icons/home-active.svg")} style={{width: 30, height: 30}} />),
                    tabBarLabelStyle: {        
                      fontFamily: 'VT323', 
                      fontSize: 15 ,
                    },
                    headerShown: false,
                }} />


      <Tab.Screen 
      name="User" 
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (<Image source={require("./assets/icons/person-active.svg")} style={{width: 30, height: 30}}/>),
        tabBarLabelStyle: {        
                      fontFamily: 'VT323', 
                      fontSize: 15 ,
                    }
        }} 
      />
      
    </Tab.Navigator>

    </NavigationContainer>

  );
}

const App=(navigation)=>{
  let [fontsLoaded] = useFonts({
    'VT323': require('./assets/fonts/VT323-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return<AppLoading />;
  }

  return(
    <View style={Styles.appContainer}>
      <BottomNav />
    </View>
    
  )
  


}

export default App;


