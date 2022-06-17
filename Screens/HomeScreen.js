import {React, useState, useEffect} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import {FAB} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import DropDownPicker from 'react-native-dropdown-picker';
import Entries from '../components/Entries';
import Entry from '../components/Entry';
import PastWinners from '../components/PastWinners';
import AddPost from './AddPostScreen';
import { Styles } from '../assets/style';
import { auth } from '../firebase';
import { getUserFromId } from '../services/Database';
import ModerationScreen from './ModerationScreen';

const Stack = createNativeStackNavigator();


function Display(){
  
  const navigation=useNavigation();
  const [currentUser,setcurrentUser]=useState()

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user) {
        //user is logged in
        const currentU=await getUserFromId(auth.currentUser.uid)
        console.log(currentU)
        setcurrentUser(currentU)
        console.log(currentUser)
        setLoggedIn(true)

      } else {
        //user is logged out
        setLoggedIn(false)
      }
    })

    return unsubscribe;
  }, []);

  //Listening to if our current User is logged in

  return(
  <View style={Styles.entryContainer}>

  {loggedIn? (
    <>
      <Text style={Styles.usergreet}>Hi {currentUser.displayName}</Text>
      {(currentUser.role==='moderator')?(
        <TouchableOpacity style={Styles.iconbutton} onPress={() => navigation.navigate( 'Moderation' )}>
          <Image source={require("../assets/icons/settings.svg")} style={{width: 32, height: 30}} />
          
        </TouchableOpacity>
      ):(
        <></>
      )}

    </>
  ):(
    <>
      <Text style={Styles.usergreet} onPress={()=>navigation.navigate('User')}>Sign In to Participate</Text>
    </>
  )}

  <Text style={Styles.scrollTitle}>Previous Winners:</Text>

  <PastWinners />

  <Entries />

  {loggedIn? (
    <>
    <FAB
      style={Styles.fab}
      icon="plus"
      onPress={() => navigation.navigate( 'AddPost' )} />
    </>
  ):(
    <>
      
    </>
  )}




</View>
  )
}

const HomeScreen=(navigation)=>{
    return(
      <Stack.Navigator initialRouteName="Display">
        <Stack.Screen name="Display" component={Display} options={{ headerShown: false }}/>
        <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown: false }}/>
        <Stack.Screen name="Entry" component={Entry} options={{ headerShown: false }}/>
        <Stack.Screen name="Moderation" component={ModerationScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
      
    )
  }

  export default HomeScreen;