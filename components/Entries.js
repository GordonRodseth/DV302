import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
import { useState, useEffect } from 'react';
import { Styles } from '../assets/style';
import { getAllEntries, getAllEntriesLoggedOut, getUserFromId, unVote,Vote } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';


export default function Entries(){
  const navigation=useNavigation();
  const [IsLoading, setIsLoading]=useState(true);
  const [posts,setPosts]=useState([]);
  const [currentUser,setcurrentUser]=useState()
  
  const [loggedIn, setLoggedIn] = useState(false);

  let handleVote=async(key)=>{
    
    let entry=posts[key];
    await Vote(entry.id);
    entry.votenumber=entry.votenumber+1;
    entry.uservoted=true;

    setPosts([
      ...posts.slice(0, key),
      entry,
      ...posts.slice(key + 1, posts.length)
    ]);
    
   // window.location.reload(true)
  }
  let handleUnVote=async(key)=>{
    let entry=posts[key];
    await unVote(entry.id);
    entry.votenumber=entry.votenumber-1;
    entry.uservoted=false;

    setPosts([
      ...posts.slice(0, key),
      entry,
      ...posts.slice(key + 1, posts.length)
    ]);
    
   // window.location.reload(true)
  }
  useEffect(async()=>{
    const unsubscribe = await onAuthStateChanged(auth, async (user) => {
      if(user) {
        //user is logged in
        const currentU=await getUserFromId(auth.currentUser.uid)
        console.log(currentU)
        setcurrentUser(currentU)
        console.log(currentUser)
        setLoggedIn(true)
        await fetchAllEntries();
        

      } else {
        //user is logged out
        setLoggedIn(false)
        await fetchAllEntriesLoggedOut();
        
      }
      
    })
    
    return unsubscribe
  }, [])

  const fetchAllEntries= async ()=>{

      let data=await getAllEntries();
      console.log(data);
      setPosts(await getAllEntries());
      console.log(posts);
      setIsLoading(false);
      getAllEntries().then(setPosts(data))



  }

  const fetchAllEntriesLoggedOut=async()=>{
    let data=await getAllEntriesLoggedOut();
    console.log(data);
    setPosts(await getAllEntriesLoggedOut());
    console.log(posts);
    setIsLoading(false);
    getAllEntriesLoggedOut().then(setPosts(data))
  }



  return(
    <SafeAreaView >
    <ActivityIndicator animating={IsLoading}/>
      {posts.map((entry,index)=>(
        <TouchableOpacity onPress={() => navigation.navigate( 'Entry', {entryid:entry.id} )} style={Styles.entry} key={index} >
          <Image style={Styles.thumb} source={ {uri:"https://firebasestorage.googleapis.com/v0/b/dv302project.appspot.com/o/"+entry.img_link+"?alt=media&token=b49c3187-c56e-42e9-8433-e40dd44b4e88"}} />
          <View style={Styles.entrycardtext}>
            <Text style={Styles.entrycardtitle}>{entry.title}</Text>
            <Text style={Styles.entrycarduser}>{entry.artistName}</Text>
            {loggedIn?(
              <>
              {(entry.uservoted)? (
              <>
              <TouchableOpacity style={Styles.entryVoting} onPress={()=>handleUnVote(index)}>
                <Image source={require("../assets/icons/heart-full.svg")} style={{width: 32, height: 30}} />
                <Text style={Styles.entryVotes}>{entry.votenumber}</Text>
              </TouchableOpacity>
              </>
            ):(
              <>
              <TouchableOpacity style={Styles.entryVoting} onPress={()=>handleVote(index)}>
                <Image source={require("../assets/icons/heart.svg")} style={{width: 32, height: 30}} />
                <Text style={Styles.entryVotes}>{entry.votenumber}</Text>
              </TouchableOpacity>
              </>
            )}
              </>
            ):(
              <>
              </>
            )}


          </View>
        </TouchableOpacity>
      ))}

    </SafeAreaView>

  )
}

