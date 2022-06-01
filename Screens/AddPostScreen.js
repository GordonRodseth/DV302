import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entry from '../components/Entry';
import { Styles } from '../assets/style';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files'; 

const AddPost=()=>{
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }
  
      setSelectedImage({ localUri: pickerResult.uri});
    };
  
    let openShareDialogAsync = async () => {
      if (Platform.OS === 'web') {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }
  
      await Sharing.shareAsync(selectedImage.localUri);
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
            source={{ uri: selectedImage.localUri }}
            style={Styles.thumb}
          />
          <TextInput style={Styles.entrytitle} placeholder='Give your work a Title'></TextInput>
          <TextInput style={Styles.entrytext} placeholder='Describe your work'></TextInput>
          <TouchableOpacity onPress={openShareDialogAsync} style={Styles.button}>
            <Text style={Styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    
    return (
      <View style={Styles.container}>
        <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={Styles.logo} />
        <Text style={Styles.instructions}>
          To share a photo from your phone with a friend, just press the button below!
        </Text>
  
        <TouchableOpacity onPress={openImagePickerAsync} style={Styles.button}>
          <Text style={Styles.buttonText}>Upload Your Art</Text>
        </TouchableOpacity>

      </View>
    );
  }
  
export default AddPost;