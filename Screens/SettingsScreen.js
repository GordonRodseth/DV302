import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Styles } from '../assets/style';

const SettingsScreen=({navigation})=>{
    return(
      <View style={Styles.container}>
        <Text>Settings</Text>
      </View>
      
    )
  }

export default SettingsScreen;