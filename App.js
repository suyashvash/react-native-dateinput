import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Image,TouchableOpacity,Text, View ,Button, Platform} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

const App= () => {

    const [day, setDay] = React.useState(null);
    const [month, setMonth] = React.useState(null);
    const [year, setYear] = React.useState(null);

    const month30 = ["4","6","9","11"];
    const month31 = ["1","3","5","7","8","10","12"];
    let dateLimit = 30;
    let febMonth = 28;
    let leapYear = false;
    let monthError = false;
    let dateError = false;
    let yearError = false;
       
    const yearChecker=()=>{
      let yearLen = year.length;
      if (yearLen==4) {
        if (parseInt(year)%4==0) { leapYear = true; febMonth = 29;} 
        else {leapYear= false;}
      } 
      else {yearError = true;}
      }

    const monthChecker=()=>{

      if (parseInt(month)<=12) {
        if (month30.includes(month)) {dateLimit= 30;} 
        else if(month31.includes(month)){dateLimit=31;}
        else if(month == 2){dateLimit=febMonth;}  } 
      else {monthError=true;} 
    }
    

    const dateChecker=()=>{
      let date = parseInt(day);
      if (date<=dateLimit) {dateError = false;  } 
      else {dateError = true;}
    }
    
    
    const validate=()=>{
        if (day==null | month==null | year==null) {alert("Please fill all Fields !")}
        else {
          yearChecker()
          monthChecker()
          dateChecker()
          if (!monthError && !dateError && !yearError ) {
            alert('Year - ' + year  +'\n'+'Month -'+ month +'\n'+ 'Days'+ ' >> '+ dateLimit)}
          else{alert("In valid Entries !")}
          
        }
    }

    return(
        <View style={styles.base}>
            <Text style={styles.appName}>Date Input</Text>
            <View style={styles.loginWrapper}>
                <View style={styles.loginPanel}>
                    <View  style={styles.inputHolder}> 
                        <OTPTextView
                                handleTextChange={day => setDay(day)}
                                containerStyle={styles.textInputContainer}
                                textInputStyle={styles.roundedTextInput}
                                inputCount={1}
                                inputCellLength={2}
                                tintColor='#0086ff'
                                offTintColor='transparent'
                                placeholder='dd'/>
                        <OTPTextView
                                handleTextChange={month => setMonth(month)}
                                containerStyle={styles.textInputContainer}
                                textInputStyle={styles.roundedTextInput}
                                inputCount={1}
                                inputCellLength={2}
                                tintColor='#0086ff'
                                offTintColor='transparent' 
                                placeholder='mm'/>
                        <OTPTextView
                                handleTextChange={year => setYear(year)}
                                containerStyle={styles.textInputContainer}
                                textInputStyle={styles.roundedTextInput}
                                inputCount={1}
                                inputCellLength={4}
                                tintColor='#0086ff'
                                offTintColor='transparent' 
                                placeholder='yyyy'/>
                              
                    </View>
                    <View style={styles.cautionPanel}> 
                        <Text style={styles.ctext}>Enter your date as DD/MM/YYYY</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.sBtn} onPress={validate}>
                        <Text style={styles.sText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    
    );

}

const styles = StyleSheet.create({
    base:{
        backgroundColor:'white',
        flex:1,
        alignItems: 'center',
        justifyContent:'center',},

    appName:{
        fontSize:42,},

    loginWrapper:{
        width:'100%',
        marginTop:'20%',
        alignItems: 'center',
        justifyContent:'center',},

    loginPanel:{
        width:'80%',},

    textInputContainer: {
      marginBottom: 10,},

    roundedTextInput: {
      borderRadius: 10,
      width:80,
      backgroundColor:'#ffdeb5',
      borderBottomColor:'red',},

    sBtn:{
      backgroundColor:'#FF8C00',
      height:59,
      width:'100%',
      marginTop:10,
      borderRadius:80,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOpacity: 1,
      elevation: 12,},

    sText:{
      color:'white',
      fontSize:18,},

    inputHolder:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',},

    cautionPanel:{
      margin:20,
      paddingBottom:20,},

    ctext:{
      fontSize:16,},

    })

export default App;