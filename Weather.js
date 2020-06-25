import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: "Thunderstorm",
      subtitle: "Lightning.."
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "hail.."
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      title: "Rain",
      subtitle: "Rainy.."
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "Snow",
      subtitle: "Snowy.."
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: "Sunny",
      subtitle: "Sunny.."
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      title: "Clouds",
      subtitle: "Cloudy.."
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Mist",
      subtitle: "Mist.."
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Dust",
      subtitle: "Dusty.."
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: "Haze.."
    }
  };

export default function Weather({temp, condition, name}){
    return(
            <>
            <Text 
            style={styles.location}>위치 : {name}</Text>
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
            >
            <StatusBar barStyle = "light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp} 도</Text>
            </View>
            <View style={styles.halfContainer, styles.textContainer}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
            </>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"600",
        marginBottom:20
    },
    subtitle:{
        fontWeight:"300",
        color:"white",
        fontSize:24,
        marginBottom:150
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    },
    location:{
      color:"black",
      backgroundColor : "rgba(0,0,0,0.3)",
      fontSize : 20
    }
})