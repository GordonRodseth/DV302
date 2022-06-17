import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
import { useState, useEffect } from 'react';
import { Styles } from '../assets/style';
import { getEntry, Vote, unVote, getUserFromId, getEntryLoggedOut } from '../services/Database';
import { isLoading } from 'expo-font';
import { onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { auth } from '../firebase';



export default function Entry({ navigation, route }){
    const [currentUser,setcurrentUser]=useState()
    const entryid  = route.params.entryid;
    console.log(entryid);
    const [IsLoading, setIsLoading]=useState(true);
    const [entry,setEntry]=useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [poster, setPoster]=useState(false)

    let handleVote=async()=>{
        await Vote(entryid);

        let holdentry=entry;
        holdentry.votenumber=holdentry.votenumber+1;
        holdentry.uservoted=true;
        setEntry([]);
        setEntry(holdentry);
        //window.location.reload(false);
      }

    let handleUnVote=async()=>{
        await unVote(entryid);
        
        let holdentry=entry;
        holdentry.votenumber=holdentry.votenumber-1;
        holdentry.uservoted=false;
        setEntry([]);
        setEntry(holdentry);
        //window.location.reload(false);
      }

    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(user) {
              //user is logged in
              const currentU=await getUserFromId(auth.currentUser.uid)
              console.log(currentU)
              setcurrentUser(currentU)
              console.log(currentUser)
              setLoggedIn(true)
              fetchEntry();
      
            } else {
              //user is logged out
              setLoggedIn(false)
              fetchEntryLoggedOut();
            }
          })

    }, [])

    const fetchEntry= async ()=>{

        const data=await getEntry(entryid,loggedIn);

        setEntry(data);
        if(loggedIn){
        if(data.artistId==auth.currentUser.uid){
            setPoster(true);
            console.log("POSTER")
        }
        else{
            console.log(data.artistId+" is not equal to "+auth.currentUser.uid)
            setPoster(false);
        }
        }
        
    }
    const fetchEntryLoggedOut= async ()=>{

        const data=await getEntryLoggedOut(entryid,loggedIn);

        setEntry(data);
        if(loggedIn){
        if(data.artistId==auth.currentUser.uid){
            setPoster(true);
            console.log("POSTER")
        }
        else{
            console.log(data.artistId+" is not equal to "+auth.currentUser.uid)
            setPoster(false);
        }
        }
    }

  return(
    <SafeAreaView style={Styles.container}>
        <Image style={Styles.entryimg} source={ {uri:"https://firebasestorage.googleapis.com/v0/b/dv302project.appspot.com/o/"+entry.img_link+"?alt=media&token=b49c3187-c56e-42e9-8433-e40dd44b4e88"}} 
        />
        <View style={Styles.entrytext}>
            <Text style={Styles.entrytitle}>{entry.title}</Text>
            <Text style={Styles.entryuser}>{entry.artistName}</Text>
            
            {loggedIn?(
              <>
              {(entry.uservoted)? (
              <>
              <TouchableOpacity style={Styles.entryVoting} onPress={()=>handleUnVote()}>
                <Image source={require("../assets/icons/heart-full.svg")} style={{width: 32, height: 30}} />
                <Text style={Styles.entryVotes}>{entry.votenumber}</Text>
              </TouchableOpacity>
              </>
            ):(
              <>
              <TouchableOpacity style={Styles.entryVoting} onPress={()=>handleVote()}>
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
        <Text style={Styles.entrydesc}>{entry.description}</Text>

        {poster? (
        <>
            <TouchableOpacity style={Styles.profilebutton2}>
                <Text style={Styles.buttonText}>Edit</Text>
            </TouchableOpacity>
        </>
        ):(
            <>
            </>
        )}

    </SafeAreaView>

  )
}
