//'use strict';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    pageHeading:{
        fontFamily: 'VT323', 
        fontSize: 45 ,
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

    winnersContainer: {
      flex:1,
      backgroundColor: 'black',
      overflow:'scroll',
      paddingTop:15,
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
    buttonText:{
      textAlign:'center',
      backgroundColor:'#EA52B3',
      color: 'white',
      fontFamily: 'VT323', 
      fontSize: 45 ,
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
    thumb:{
      height:250,
      width: '100%',
      borderColor: '#EA52B3',
      borderWidth:1,
    },
    entrytext:{
      justifyContent: 'center',
      padding:15,
    },
    entrytitle:{
      fontFamily: 'VT323', 
      fontSize: 30 ,
      color:'white',
    },
    entryuser:{
      fontFamily: 'VT323', 
      fontSize: 10 ,
      color:'white',
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
    
});