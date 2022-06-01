import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
import { useState, useEffect } from 'react';
import { Styles } from '../assets/style';
import { getAllWinners } from '../services/Database';
import { isLoading } from 'expo-font';
import { ScrollView } from 'react-native-web';


export default function Entry(){
  const [IsLoading, setIsLoading]=useState(true);

  const [entries,setEntries]=useState([]);

  useEffect(()=>{
    fetchAllWinners();
  }, [])

  const fetchAllWinners= async ()=>{
    const data=await getAllWinners();
    setEntries(data);
    setIsLoading(false);
  }

  return(
    <SafeAreaView >
    <ScrollView horizontal={true} centerContent={true} style={Styles.winnersContainer}>
    <ActivityIndicator animating={IsLoading}/>
      {entries.map((entry,index)=>(
        
        <TouchableOpacity style={Styles.PastWinner} key={index}>
          <Image style={Styles.thumb} source={require('../assets/'+entry.img_link)} />
          <View style={Styles.PastWinnertext}>
            <Text style={Styles.PastWinnertitle}>{entry.title}</Text>
            <Text style={Styles.PastWinneruser}>{entry.artist}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>

    </SafeAreaView>

  )
}

