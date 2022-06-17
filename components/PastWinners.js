import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
import { useState, useEffect } from 'react';
import { Styles } from '../assets/style';
import { getAllWinners } from '../services/Database';
import { isLoading } from 'expo-font';
import { ScrollView } from 'react-native-web';


export default function PastWinners(){
  const [IsLoading, setIsLoading]=useState(true);

  const [entries,setEntries]=useState([]);
  const [anyWinners, setAnyWinners]=useState(false)

  useEffect(()=>{
    fetchAllWinners();
  }, [])

  const fetchAllWinners= async ()=>{
    const data=await getAllWinners();
    setEntries(data);
    setIsLoading(false);
    console.log(data);
    if(data.length>0){
      setAnyWinners(true)
    }
    else{
      setAnyWinners(false)
    }
  }



  return(
    <SafeAreaView >
    <ScrollView horizontal={true} centerContent={true} style={Styles.winnersContainer}>
    <ActivityIndicator animating={IsLoading}/>
    {anyWinners? (
    <>
    {entries.map((entry,index)=>(
        
        <TouchableOpacity style={Styles.PastWinner} key={index}>
        <Image style={Styles.thumb} source={ {uri:"https://firebasestorage.googleapis.com/v0/b/dv302project.appspot.com/o/"+entry.img_link+"?alt=media&token=b49c3187-c56e-42e9-8433-e40dd44b4e88"}} />
          <View style={Styles.PastWinnertext}>
            <Text style={Styles.PastWinnertitle}>{entry.title}</Text>
            <Text style={Styles.PastWinneruser}>{entry.artistName}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  ):(
    <>
      <Text style={Styles.entryuser} >No Winners Yet!</Text>
    </>
  )}
      
      </ScrollView>

    </SafeAreaView>

  )
}

