import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
import { useState, useEffect } from 'react';
import { Styles } from '../assets/style';
import { getAllEntries } from '../services/Database';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';



export default function Entry(){
  const [IsLoading, setIsLoading]=useState(true);
  //const [url, setUrl]=useState([]);
  const [entries,setEntries]=useState([]);
  const newentries=[];
  
  var url;
  useEffect(()=>{
    fetchAllEntries();

  }, [])
  const func=async(y)=>{
    console.log('func is recieving: '+y);
    const storage=getStorage();
    const reference=ref(storage,y);
    await getDownloadURL(reference).then((x)=>{
        url=x;
        console.log('the url should be: '+url);
    });
}
  const fetchAllEntries= async ()=>{
    const data=await getAllEntries();
    

    data.forEach(async(e)=>{
      await func('/'+e.img_link);
      let newentry={...e, img_url:url,};
      newentries.push(newentry);
      console.log(newentries)
    });

    setEntries(data);
    setIsLoading(false);


  }



  return(
    <SafeAreaView >
    <ActivityIndicator animating={IsLoading}/>
      {entries.map((entry,index)=>(
        
        <TouchableOpacity style={Styles.entry} key={index}>
          <Image style={Styles.thumb} source={require('../assets/'+entry.img_link)} />
          <View style={Styles.entrytext}>
            <Text style={Styles.entrytitle}>{entry.title}</Text>
            <Text style={Styles.entryuser}>{entry.artist}</Text>
          </View>
        </TouchableOpacity>
      ))}

    </SafeAreaView>

  )
}

