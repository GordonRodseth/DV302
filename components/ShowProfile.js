import {React, useState, useEffect} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import {FAB} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { getPostsfromUser } from '../services/Database';
import { Styles } from '../assets/style';
import { auth } from '../firebase';
import { getUserFromId } from '../services/Database';
import { deleteEntry } from '../services/Database';

export default function ShowProfile({navigation}){

  const [currentUser,setcurrentUser]=useState();
  const [name,setName]=useState('');
  const [role,setRole]=useState('');

  const [entries,setEntries]=useState([]);

  const fetchAllEntries= async ()=>{
    const data=await getPostsfromUser(auth.currentUser.uid);
    
    setEntries(data);
  }

  let handleDelete=async(key)=>{
    
    let entry=entries[key];
    await deleteEntry(entry.id);

    setEntries([
      ...entries.slice(0, key),
      ...entries.slice(key + 1, entries.length)
    ]);
    
   // window.location.reload(true)
  }
  useEffect(async() => {

    fetchAllEntries();

    const currentU=await getUserFromId(auth.currentUser.uid)

    console.log(currentU)

    setcurrentUser(currentU)

    setName(currentU.displayName)

    setRole(currentU.role)
    
    console.log(currentUser)
  }, []);


  return(
    <View style={Styles.entryContainer}>
      
        <Text style={Styles.profiletitle}>UserName:</Text>
        <Text style={Styles.profilefield}>{name}</Text>
        <Text style={Styles.profiletitle}>Email:</Text>
        <Text style={Styles.profilefield}>{auth.currentUser.email}</Text>
        <Text style={Styles.profiletitle}>Role:</Text>
        <Text style={Styles.profilefield}>{role}</Text>

        <View style={Styles.profilebuttons}>



        <TouchableOpacity style={Styles.profilebutton2} onPress={() => auth.signOut() }>

            <Text style={Styles.profilebuttonText}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.profilebutton3}>

            <Text style={Styles.profilebuttonText} onPress={() => auth.currentUser.delete() }>Delete Profile</Text>
        </TouchableOpacity>
        </View>

        <View style={Styles.proftitle}>
          <Text style={Styles.pageHeading} >Your Entries</Text>
        </View>

        <View style={Styles.container}>

        {entries.map((entry,index)=>(
        
        <TouchableOpacity onPress={() => navigation.navigate( 'Entry', {entryid:entry.id} )} style={Styles.profileEntry} key={index} >
          <Image style={Styles.thumb} source={ {uri:"https://firebasestorage.googleapis.com/v0/b/dv302project.appspot.com/o/"+entry.img_link+"?alt=media&token=b49c3187-c56e-42e9-8433-e40dd44b4e88"}} />
          <View style={Styles.entrycardtext}>
            <Text style={Styles.entrycardtitle}>{entry.title}</Text>
            <TouchableOpacity style={Styles.entryVoting}>
              <Image source={require("../assets/icons/heart.svg")} style={{width: 32, height: 30}}/>
              <Text style={Styles.entryVotes}>{entry.vote_count}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={Styles.profilebutton} onPress={()=>handleDelete(index)}>
            <Text style={Styles.profilebuttonText}>Delete Post</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      </View>
      </View>


  )
}
