import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entry from './components/Entry';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import CategoriesScreen from './Screens/CategoriesScreens';
import LogInScreen from './Screens/LogIn';
import SignUpScreen from './Screens/SignUp';
//import AddPostScreen from './Screens/AddPostScreen';
import { useState } from 'react/cjs/react.production.min';
import { Styles } from './assets/style';
import AddPost from './Screens/AddPostScreen';


const Tab = createBottomTabNavigator();




const UserVerification=(navigation)=>{
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
        component={LogInScreen} 
        options={{
          headerShown: false,
          tabBarIcon: () => (<Image source={require("./assets/icons/login.svg")} style={{width: 30, height: 30}} />),
          tabBarLabelStyle: {        
            fontFamily: 'VT323', 
            fontSize: 15 ,
          }
          }}/>
      <Tab.Screen 
        name="Sign Up" 
        component={SignUpScreen} 
        options={{
          headerShown: false,
          tabBarIcon: () => (<Image source={require("./assets/icons/signup.svg")} style={{width: 30, height: 30}} />),
          tabBarLabelStyle: {        
            fontFamily: 'VT323', 
            fontSize: 15 ,
          }
          }}/>
    </Tab.Navigator>

  )
}

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
      name="Categories" 
      component={CategoriesScreen}
      options={{
                    tabBarIcon: () => (<Image source={require("./assets/icons/list-active.svg")} style={{width: 30, height: 30}} />),
                    tabBarLabelStyle: {        
                      fontFamily: 'VT323', 
                      fontSize: 15 ,
                    },
                    headerShown: false,
                  
                }} />
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
      name="Settings" 
      component={SettingsScreen}
      options={{
                    tabBarIcon: () => (<Image source={require("./assets/icons/settings-active.svg")} style={{width: 30, height: 30}} />),
                    tabBarLabelStyle: {        
                      fontFamily: 'VT323', 
                      fontSize: 15 ,
                    },
                    headerShown: false,
                }} />
      <Tab.Screen 
      name="User" 
      component={UserVerification}
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


