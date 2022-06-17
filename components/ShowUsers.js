import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
import { useState, useEffect } from 'react';
import { Styles } from '../assets/style';
import { getAllEntries, unVote,Vote, ViewUsers, DeleteUser, MonthlyReset,runContest } from '../services/Database';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { waitForPendingWrites } from 'firebase/firestore';



export default function ShowUsers({navigation}){
  const [IsLoading, setIsLoading]=useState(true);
  const [users,setUsers]=useState([]);
  const [posts,setPosts]=useState([]);
  const [winnerid, setWinnerId]=useState();

  let handleCompetition=()=>{
    //console.log(posts)
    var mostvotes=0;
    console.log(winnerid)
    posts.forEach((post)=>{
        console.log(post.id)
        if(post.votenumber > mostvotes){
            mostvotes=post.votenumber;
            console.log(post.id)

            setWinnerId(post.id)
            waitForPendingWrites
            console.log(winnerid)
            
        }
        else{mostvotes=mostvotes}
    })

    if(winnerid){runContest(winnerid)}
    
  }
  
  let handleDelete=async(key)=>{
    
    let user=users[key];
    await DeleteUser(user.id);

    setUsers([
      ...users.slice(0, key),
      ...users.slice(key + 1, users.length)
    ]);
    
   // window.location.reload(true)
  }
  useEffect(async()=>{
    await fetchAllUsers();
    await fetchAllEntries();
    
  }, [])

  const fetchAllUsers= async ()=>{
    
    let data=await ViewUsers();
    setUsers(data);
    setIsLoading(false);


  }
  const fetchAllEntries= async ()=>{
    let data=await getAllEntries();

    setPosts(await getAllEntries());

    setIsLoading(false);
    getAllEntries().then(setPosts(data))
}



  return(
    <SafeAreaView style={Styles.entryContainer}>
    <ActivityIndicator animating={IsLoading}/>
      {users.map((user,index)=>(
        <TouchableOpacity onPress={() => navigation.navigate( 'User Profile', {userid : user.id} )} style={Styles.usercard} key={index} >

          <View style={Styles.usercardtext}>
            <Text style={Styles.usercardtitle}>{user.displayName}</Text>
            <Text style={Styles.usercardsubtitle}>{user.role}</Text>
          </View>
            <TouchableOpacity style={Styles.profilebutton3}>

                <Text style={Styles.profilebuttonText} onPress={() => handleDelete(index) }>Delete Profile</Text>
            </TouchableOpacity>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={Styles.button}>
        <Text onPress={() => handleCompetition() } style={Styles.buttonText}>Run Competition</Text>
      </TouchableOpacity>

    </SafeAreaView>

  )
}

