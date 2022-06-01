import { db } from '../firebase';
import {collection, doc,getDocs,setDoc, Timestamp, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { async } from '@firebase/util';


var image='';

export default function getImage(){

}
export const getAllEntries=async()=>{
    const entries=[];
    const querySnapshot=await getDocs(collection(db,'entries'));
    //const [url, setUrl]=useState();

    //useEffect(()=>{
    //    const func=async(y)=>{
    //        console.log('func is recieving: '+y);
    //        const storage=getStorage();
    //        const reference=ref(storage,y);
    //        await getDownloadURL(reference).then((x)=>{
    //            setUrl(x);
    //            console.log('the url should be: '+url);
    //        });
    //    }
    //    func();
    //},[])


    querySnapshot.forEach(async(doc)=>{
        let tempentry={...doc.data()};
        //image=tempentry.img_url;
        //await func()
        let entry={...doc.data(), id:doc.id,};
        entries.push(entry);
    })
    return entries;
}

export const getAllWinners=async()=>{
    const entries=[];
    const querySnapshot=await getDocs(collection(db,'entries'));



    querySnapshot.forEach((doc)=>{
        
        let entry={...doc.data(), id:doc.id};
        if(entry.winner){
            entries.push(entry);
        }
        
    })
    return entries;
}