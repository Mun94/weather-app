import React from 'react';
import Loading from "./Loading.js";
import {Alert} from "react-native";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "63fda8c44b8a4dfe5419eca67574a9bc"; //openweathermap.org

export default class extends React.Component {
  state = {
    isLoading : true
  };
  
 getWeather = async(latitude, longitude) => {
   const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
   console.log(data);
 };

 getLocation = async() => {
   try{
     await Location.requestPermissionsAsync();
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
    this.setState({isLoading : false});
    this.getWeather(latitude, longitude)
   }catch(error){
    Alert.alert("Can't find you", "So sad");
   }
 }

 componentDidMount(){
   this.getLocation();
 }

  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading/> : "asdas";
  }
}