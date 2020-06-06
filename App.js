import React from 'react';
import Loading from "./Loading.js";
import {Alert} from "react-native";
import * as Location from "expo-location";


export default class extends React.Component {
  state = {
    isLoading : true
  };

 getLocation = async() => {
   try{
     await Location.requestPermissionsAsync();
    const {coords:{altitude, longitude}} = await Location.getCurrentPositionAsync();
    this.setState({isLoading : false});
   }catch(error){
    Alert.alert("Can't find you", "So sad");
   }
   const location = await Location.getCurrentPositionAsync();
 }

 componentDidMount(){
   this.getLocation();
 }

  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading/> : "asdas";
  }
}