//'use strict';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    pageHeading:{
        fontFamily: 'VT323', 
        fontSize: 35 ,
        color:'white',
        width: '100%',
        textAlign: 'center',
        marginBottom: 25,
      },
    scrollTitle:{
      fontFamily: 'VT323', 
      fontSize: 40 ,
      color:'white',
      paddingLeft:15,
      backgroundColor:'black',
      borderTopColor:'#EA52B3',
      borderTopWidth:2,
      paddingTop: 5,
    },
    usergreet:{
      fontFamily: 'VT323', 
      fontSize: 20 ,
      color:'white',
      marginBottom:15,
      paddingLeft:15,
    },
    inputLabel:{
        fontFamily: 'VT323', 
        fontSize: 30 ,
        color:'#EA52B3',
    },
    appContainer: {
      flex: 1,
      backgroundColor: '#130529',
      overflow:'scroll',
      padding:0,
    },

    container: {
        flex: 1,
        backgroundColor: '#130529',
        overflow:'scroll',
        padding:25,
      },

    entryContainer: {
      flex:1,
      backgroundColor: '#130529',
      overflow:'scroll',
      paddingTop:25,
    },

    proftitle: {
      padding:15,
      backgroundColor:'black',
      borderTopColor:'#EA52B3',
      borderTopWidth:'2px',
      borderBottomColor:'#EA52B3',
      borderBottomWidth:'2px',
      width:'100%',
      height:80,
    },

    winnersContainer: {
      flex:1,
      backgroundColor: 'black',
      overflow:'scroll',
      paddingTop:20,
      paddingBottom:15,
      borderBottomColor:'#EA52B3',
      borderBottomWidth:2,
      paddingRight:50,
      paddingLeft:5,
    },

    userInput:{
        backgroundColor: 'white',
        opacity:0.5,
        margin: 10,
        marginBottom:25,
        borderColor: '#EA52B3',
        borderWidth:1,
        padding:10,
        fontFamily: 'VT323', 
        fontSize: 25,
        
    },
    button:{
      marginTop:75,
      backgroundColor:'#EA52B3',
      color: 'white',
      fontFamily: 'VT323', 
      fontSize: 45 ,
      padding: 15,
    },
    profilebuttons:{
      marginBottom:25,
      paddingLeft:25,
      paddingRight:25,
      marginLeft:10,
      marginRight:10,
    },
    profilebutton:{
      marginTop:5,
      backgroundColor:'#EA52B3',
      color: 'black',
      justifyContent:'centre',
      fontFamily: 'VT323',
      width:'100%',
      padding: 10,

    },
    profilebutton1:{
      marginTop:25,
      backgroundColor:'#EA52B3',
      color: 'black',
      justifyContent:'centre',
      fontFamily: 'VT323',
      width:'30%',
      padding: 10,
      position:'absolute',
      left:0,
    },
    profilebutton2:{
      marginTop:25,
      backgroundColor:'#EA52B3',
      color: 'black',
      justifyContent:'centre',
      fontFamily: 'VT323',
      width:'30%',
      padding: 10,
      marginLeft:'auto',
      marginRight:'auto',
    },
    profilebutton3:{
      marginTop:25,
      backgroundColor:'#EA52B3',
      color: 'black',
      justifyContent:'centre',
      fontFamily: 'VT323',
      width:'30%',
      padding: 10,
      position:'absolute',
      right:0,
    },
    buttonText:{
      textAlign:'center',
      backgroundColor:'#EA52B3',
      color: 'white',
      fontFamily: 'VT323', 
      fontSize: 45 ,
    },
    profilebuttonText:{
      textAlign:'center',
      backgroundColor:'#EA52B3',
      color: 'black',
      fontFamily: 'VT323', 
      fontSize: 16 ,
    },

    profilecontainer:{
      height:300,
      width:'100%'
    },


    entry:{
      flexDirection: 'column',
      width: '75%',
      alignSelf: 'center',
      marginBottom:'5%',
      marginTop:'2%',
      backgroundColor: 'black',
      borderColor: '#EA52B3',
      borderTopWidth:1,
      borderBottomWidth:4,
      borderLeftWidth:1,
      borderRightWidth:4,
    },

    profileEntry:{
      flexDirection: 'column',
      width: '100%',
      alignSelf: 'center',
      marginBottom:'5%',
      marginTop:'2%',
      backgroundColor: 'black',
      borderColor: '#EA52B3',
      borderTopWidth:1,
      borderBottomWidth:4,
      borderLeftWidth:1,
      borderRightWidth:4,
    },

    entryimg:{
      width: '100%',
      height: '60%',
      borderColor:'#EA52B3',
      borderBottomWidth:'3px',
    },
    thumb:{
      height:250,
      width: '100%',
      borderColor: '#EA52B3',
      borderWidth:1,
    },
    entrycardtext:{
      justifyContent: 'center',
      padding:15,
      color:'white'
    },
    entrycardtitle:{
      fontFamily: 'VT323', 
      fontSize: 30 ,
      color:'white',
    },
    entrycarduser:{
      fontFamily: 'VT323', 
      fontSize: 10 ,
      color:'white',
    },
    entrytext:{
      justifyContent: 'center',
      padding:15,
      color:'white',
      width: '100%',
      borderColor:'#EA52B3',
      borderBottomWidth:'2px',
    },
    entrytitle:{
      fontFamily: 'VT323', 
      fontSize: 50 ,
      color:'white',
    },
    entryuser:{
      fontFamily: 'VT323', 
      fontSize: 25 ,
      color:'#EA52B3',
    },
    entrydesc:{
      fontFamily: 'VT323', 
      marginTop: 10,
      padding:25,
      fontSize: 20 ,
      color:'white',
    },
    entryVoting:{
      position:'absolute',
      right:10,
      textAlign:'centre',
      
    },
    entryVotes:{
      textAlign:'center',
      fontFamily: 'VT323', 
      fontSize: 20 ,
      color:'white',
    },
    
    errormessage:{
      fontSize: 15 ,
      color:'red',
    },

    usercard:{
      flexDirection: 'column',
      padding:'5%',
      width: '90%',
      alignSelf: 'center',
      marginBottom:'5%',
      marginTop:'2%',
      backgroundColor: 'black',
      borderColor: '#EA52B3',
      borderTopWidth:1,
      borderBottomWidth:4,
      borderLeftWidth:1,
      borderRightWidth:4,
    },
    usercardtitle:{
      fontFamily: 'VT323', 
      fontSize: 35 ,
      color:'white',
    },
    usercardsubtitle:{
      fontFamily: 'VT323', 
      fontSize: 20 ,
      color:'#EA52B3',
    },

    PastWinner:{
      width: 300,
      alignSelf: 'center',
      marginRight:'2%',
      marginLeft:'2%',
      backgroundColor: 'black',
    },
    PastWinnertext:{
      justifyContent: 'center',
      padding:5,
    },
    PastWinnertitle:{
      fontFamily: 'VT323', 
      fontSize: 30 ,
      color:'white',
    },
    PastWinneruser:{
      fontFamily: 'VT323', 
      fontSize: 10 ,
      color:'white',
    },
    fab: {
      position: 'fixed',
      margin: 16,
      right: 0,
      bottom: 75,
      backgroundColor: '#EA52B3',
      borderColor:'black',
      borderStyle:'solid',
      borderWidth:2,
      zIndex:1,
    },
    iconbutton: {
      position: 'absolute',
      margin: 16,
      right:0,
      top:1,
    },
    iconbuttontext:{
      fontFamily: 'VT323', 
      fontSize: 15 ,
      color:'white',
    },
    profiletitle:{
      fontFamily: 'VT323', 
      fontSize: 25 ,
      color:'#EA52B3',
      marginLeft:25,
    },
    profilefield:{
      fontFamily: 'VT323', 
      fontSize: 30 ,
      color:'white',
      marginBottom:15,
      marginLeft:25
    }
    
});