import {
    ActivityIndicator,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";


import { useState } from "react";

import {
    LinearGradient
} from "expo-linear-gradient";


import {
    Ionicons
} from "@expo/vector-icons";


import {
    getForecast,
    getWeather
} from "../services/weatherApi";


import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";




export default function Home(){


const [city,setCity]=useState("");

const [weather,setWeather]=useState(null);

const [forecast,setForecast]=useState([]);

const [loading,setLoading]=useState(false);



const searchWeather=async()=>{


if(city.trim()===""){
return;
}


try{


Keyboard.dismiss();

setLoading(true);



const current =
await getWeather(city);



const future =
await getForecast(city);



setWeather(current);



setForecast(
future.list.filter(
(item,index)=>index%8===0
)
);



}

catch(error){

alert("City Not Found");

}

finally{

setLoading(false);

}


};





return(


<LinearGradient
colors={[
"#4facfe",
"#00f2fe"
]}
style={styles.container}
>


<ScrollView
showsVerticalScrollIndicator={false}
>



{/* Header */}


<View style={styles.header}>


<View>

<Text style={styles.logo}>
🌤 Weather
</Text>


<Text style={styles.subtitle}>
Check your daily weather
</Text>

</View>


<Ionicons
name="location"
size={35}
color="white"
/>


</View>





{/* Search */}


<View style={styles.searchCard}>


<TextInput

placeholder="Search city..."

placeholderTextColor="#777"

value={city}

onChangeText={setCity}

style={styles.input}

/>



<TouchableOpacity

onPress={searchWeather}

style={styles.searchBtn}

>


<Ionicons
name="search"
size={25}
color="white"
/>


</TouchableOpacity>



</View>






{
loading &&


<ActivityIndicator

size="large"

color="white"

style={{
marginTop:30
}}

/>

}







{
weather ?

<View>


<WeatherCard
data={weather}
/>



<Text style={styles.sectionTitle}>
5 Day Forecast
</Text>




{
forecast.map((item,index)=>(


<ForecastCard

key={index}

item={item}

/>


))

}



</View>


:

<View style={styles.empty}>


<Ionicons
name="partly-sunny"
size={90}
color="white"
/>


<Text style={styles.emptyText}>
Search a city to see weather
</Text>


</View>

}




</ScrollView>





{/* Bottom Navigation */}



<View style={styles.bottomNav}>


<Ionicons
name="home"
size={28}
color="white"
/>



<Ionicons
name="search"
size={28}
color="white"
/>



<Ionicons
name="settings"
size={28}
color="white"
/>



</View>



</LinearGradient>



)

}








const styles = StyleSheet.create({


container:{
flex:1,
paddingTop:55
},



header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:25
},



logo:{
fontSize:32,
fontWeight:"bold",
color:"white"
},



subtitle:{
color:"#eee",
fontSize:16,
marginTop:5
},




searchCard:{


margin:20,

height:65,

backgroundColor:"rgba(255,255,255,0.25)",

borderRadius:30,

flexDirection:"row",

alignItems:"center",

paddingHorizontal:10


},




input:{


flex:1,

fontSize:17,

paddingHorizontal:20,

color:"white"


},




searchBtn:{


width:50,

height:50,

borderRadius:25,

backgroundColor:"#1976d2",

alignItems:"center",

justifyContent:"center"


},





sectionTitle:{


fontSize:24,

fontWeight:"bold",

color:"white",

marginLeft:20,

marginTop:20,

marginBottom:10


},




empty:{


alignItems:"center",

marginTop:120


},



emptyText:{


color:"white",

fontSize:18,

marginTop:20


},




bottomNav:{


height:70,

backgroundColor:"rgba(0,0,0,0.2)",

flexDirection:"row",

justifyContent:"space-around",

alignItems:"center"


}



});