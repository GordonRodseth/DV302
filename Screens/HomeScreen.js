import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import {FAB} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import DropDownPicker from 'react-native-dropdown-picker';
import Entry from '../components/Entry';
import PastWinner from '../components/PastWinner';
import AddPost from './AddPostScreen';
import { Styles } from '../assets/style';


const Stack = createNativeStackNavigator();


function Display(){
  const navigation=useNavigation();

  return(
  <View style={Styles.entryContainer}>
  <Text style={Styles.scrollTitle}>Past Winners</Text>

  
  <PastWinner />


  <Entry />

    <FAB
    style={Styles.fab}
    icon="plus"
    onPress={() => navigation.navigate( 'AddPost' )} />

</View>
  )
}

const HomeScreen=(navigation)=>{
    return(
      <Stack.Navigator initialRouteName="Display">
        <Stack.Screen name="Display" component={Display} options={{ headerShown: false }}/>
        <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown: false }}/>
      </Stack.Navigator>
      
    )
  }

  export default HomeScreen;