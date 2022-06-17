import {React, useState} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView, RefreshControl} from 'react-native';
import { getStorage, ref, getDownloadURL, uploadBytes } from '@firebase/storage';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entry from '../components/Entries';
import { Styles } from '../assets/style';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files'; 
import { createEntry } from '../services/Database';

export default function AddPost({navigation}){
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle]=useState("");
    const [descr, setDescrip]=useState("");

    const pickImage=async()=>{
      let result=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[4,3],
        quality:1,
        
      });
      if (!result.cancelled){
        setSelectedImage(result.uri)
      }
    }
  
    let Enter = async () => {
      const storage=getStorage();
      const reference=ref(storage,title+'.png')
  
      const img=await fetch(selectedImage);
      const bytes=await img.blob();
  
      await uploadBytes(reference,bytes);

      await createEntry(title,descr);
      window.location.reload(true);
    }; 
       // if (Platform.OS === 'web') {
       //   let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
       //   setSelectedImage({ localUri: pickerResult.uri, remoteUri });
       // } else {
       //   setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
       // } 
       // };
  
       // let openShareDialogAsync = async () => {
       // if (!(await Sharing.isAvailableAsync())) {
       //   alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
       //   return;
       // }
  
       // Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
       // };
  
    if (selectedImage !== null) {
      return (
        <View style={Styles.container}>
          <Image
            source={{ uri: selectedImage }}
            style={Styles.thumb}
          />
          <TextInput style={Styles.entrycardtitle} onChangeText={setTitle} placeholder='Give your work a Title'></TextInput>
          <TextInput style={Styles.entrycardtext} onChangeText={setDescrip} placeholder='Describe your work'></TextInput>
          <TouchableOpacity onPress={Enter}style={Styles.button}>
            <Text style={Styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    
    return (
      <View style={Styles.container}>
  
        <TouchableOpacity onPress={pickImage} style={Styles.button}>
          <Text style={Styles.buttonText}>Upload Your Art</Text>
        </TouchableOpacity>

      </View>
    );
  }
