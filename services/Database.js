import { db } from '../firebase';
import {collection, doc,getDocs,setDoc, Timestamp, onSnapshot, QuerySnapshot, query, where, getDoc, deleteDoc, updateDoc} from 'firebase/firestore'
import { getFirestore, } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL, uploadBytes } from '@firebase/storage';
import { async } from '@firebase/util';
import { auth } from '../firebase';
import { firebase } from '@react-native-firebase/auth';
import { deleteUser, getAuth } from 'firebase/auth';



export const getUserFromId=async(userid)=>{

    const docRef = doc(db, "users", userid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data().displayName)

    return docSnap.data();
}

export const getAllEntries=async()=>{

    const entries=[];
    const querySnapshot=await getDocs(collection(db,'entries'));


    querySnapshot.forEach(async(doc)=>{
        var voted=false;
        const entryvotes=await getVotesforEntry(doc.id);
        //console.log(entryvotes)
        const votescount=entryvotes.length;

        entryvotes.forEach((vote)=>{
            if(auth.currentUser.uid===vote.voterid){
                voted=true;
            }
            else{
            }
        })
    
        //console.log(votescount)
        let entry={...doc.data(), id:doc.id,votenumber:votescount,uservoted:voted};
        entries.push(entry);
        //await func()

    })

    return entries;
}

export const getAllEntriesLoggedOut=async()=>{

    const entries=[];
    const querySnapshot=await getDocs(collection(db,'entries'));


    querySnapshot.forEach(async(doc)=>{
        var voted=false;
        const entryvotes=await getVotesforEntry(doc.id);
        //console.log(entryvotes)
        const votescount=entryvotes.length;

    
        //console.log(votescount)
        let entry={...doc.data(), id:doc.id,votenumber:votescount,uservoted:voted};
        entries.push(entry);
        //await func()

    })

    return entries;
}

export const getEntry=async(entryid)=>{
    const docRef = doc(db, "entries", entryid);
    const docSnap = await getDoc(docRef);
    var voted=false;
    const entryvotes=await getVotesforEntry(entryid);
    //console.log(entryvotes)
    const votescount=entryvotes.length;

        entryvotes.forEach((vote)=>{
            if(auth.currentUser.uid===vote.voterid){
                voted=true;
            }
            else{
            }
        })
    //console.log(votescount)
    let entry={...docSnap.data(), id:entryid,votenumber:votescount,uservoted:voted};
    return entry;
}

export const getEntryLoggedOut=async(entryid)=>{
    const docRef = doc(db, "entries", entryid);
    const docSnap = await getDoc(docRef);
    var voted=false;
    const entryvotes=await getVotesforEntry(entryid);
    //console.log(entryvotes)
    const votescount=entryvotes.length;

    //console.log(votescount)
    let entry={...docSnap.data(), id:entryid,votenumber:votescount,uservoted:voted};
    return entry;
}
export const deleteEntry=async(entryid)=>{
    const docRef = doc(db, "entries", entryid);
    await deleteDoc(docRef);
    return;
}

export const getVotesforEntry=async(entryid)=>{
        const votes=[];
        
        const vsnap=await getDocs(collection(db,'entries',entryid,'votes'));
        vsnap.forEach(async(vote)=>{
            votes.push(vote.data())
        })

        return votes;
}

export const getAllWinners=async()=>{
    const entries=[];
    const q = query(collection(db, "entries"), where("winner", "==", true));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        let entry={...doc.data(), id:doc.id};
        entries.push(entry);
    });
    return entries;
}

export const getPostsfromUser=async(userid)=>{
    const entries=[];
    const q = query(collection(db, "entries"), where("artistId", "==", userid));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc)=>{
        
        let entry={...doc.data(), id:doc.id};
        
        entries.push(entry);
        
        
    })
    return entries;
}



export const createUserOnRegister = async(username) => {
    //document reference: doc(firestore init, collection name, optional - document name/id)
    
    const userRef = doc(db, 'users', auth.currentUser.uid)
    //await firebase.auth().currentUser.updateProfile({displayName:username});
    //create data
    const userData={
        id:auth.currentUser.uid,
        displayName:username,
        role:'user',
    }
    //set a document: setDoc(document reference, data we want to set, any additional options like merge)
    return setDoc(userRef, userData)
}

export const createEntry=async( title, description)=>{

    const entryRef = doc(db, 'entries',auth.currentUser.uid+'_'+title+'_'+Timestamp.fromDate(new Date()))
    const user=await getUserFromId(auth.currentUser.uid)

    //create data
    const entryData = {
        artistName:user.displayName,
        artistId:auth.currentUser.uid,
        description:description,
        img_link:title+'.png',
        post_date:Timestamp.fromDate(new Date()),
        title:title,
        winner:false
    }

    //set a document: setDoc(document reference, data we want to set, any additional options like merge)
    return setDoc(entryRef, entryData,'votes',auth.currentUser.uid,{voterid:auth.currentUser.uid})
}


export const Vote=async( entryid)=>{
    console.log(entryid)
    const voteRef = doc(db, 'entries',entryid,'votes',auth.currentUser.uid)
    console.log("Voting")
    //create data
    const voteData = {
        voterid:auth.currentUser.uid
    }

    //set a document: setDoc(document reference, data we want to set, any additional options like merge)
    
    
    return setDoc(voteRef, voteData)
    
}

export const unVote=async( entryid)=>{
    console.log(entryid)
    console.log("unVoting")
    await deleteDoc(doc(db, "entries", entryid,'votes',auth.currentUser.uid));
}

export const EditProfile=async( title, description)=>{

    const entryRef = doc(db, 'entries',title)
    await db.collection('entries').doc()

    //create data
    const entryData = {
        artist:'Jim',
        description:description,
        img_link:title+'.png',
        post_date:Timestamp.fromDate(new Date()),
        title:title,
        vote_count:0,
        winner:false
    }

    //set a document: setDoc(document reference, data we want to set, any additional options like merge)
    return setDoc(entryRef, entryData)
}
export const EditPost=async( title, description)=>{

    const entryRef = doc(db, 'entries',title)

    //create data
    const entryData = {
        artist:'Jim',
        description:description,
        img_link:title+'.png',
        post_date:Timestamp.fromDate(new Date()),
        title:title,
        vote_count:0,
        winner:false
    }

    //set a document: setDoc(document reference, data we want to set, any additional options like merge)
    return setDoc(entryRef, entryData)
}
export const ViewUsers=async( title, description)=>{

    const users=[];
    const querySnapshot=await getDocs(collection(db,'users'));
   

    querySnapshot.forEach(async(doc)=>{

        //console.log(votescount)
        let user={...doc.data()};
        users.push(user);
        //await func()

    })

    return users;
}

export const DeleteUser=async(userid)=>{

    await deleteDoc(doc(db, "users", userid));

    const q = query(collection(db, "entries"), where("artistId", "==", userid));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async(document)=>{
        const docRef=doc(db, "entries", document.id)
        await deleteDoc(docRef);
    })
    return;

}

export const runContest=async(winnerid)=>{
    const docRef = doc(db, "entries", winnerid);
    const docSnap = await getDoc(docRef);

    let entry={...docSnap.data(), id:winnerid};

    console.log(entry)

    await updateDoc(docRef, {
        winner: true
      });
    return entry;
}