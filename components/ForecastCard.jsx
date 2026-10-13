import {
    View,
    Text,
    StyleSheet
} from "react-native";


import {
    Ionicons
} from "@expo/vector-icons";



export default function ForecastCard({item}){


const weather = item.weather[0].main;


const getIcon = ()=>{


if(weather==="Rain")
return "rainy";


if(weather==="Clouds")
return "cloudy";


if(weather==="Clear")
return "sunny";


return "partly-sunny";


};



return(


<View style={styles.card}>


{/* Date */}

<View style={styles.dateBox}>


<Ionicons
name="calendar"
size={22}
color="white"
/>


<Text style={styles.date}>
{
item.dt_txt.split(" ")[0]
}
</Text>


</View>





{/* Weather */}

<View style={styles.weatherRow}>


<Ionicons

name={getIcon()}

size={45}

color="#FFD93D"

/>



<View>


<Text style={styles.condition}>

{
item.weather[0].description
}

</Text>


<Text style={styles.temp}>

{
Math.round(item.main.temp)
}°C

</Text>


</View>



</View>






{/* Details */}


<View style={styles.details}>


<View>

<Text style={styles.label}>
Humidity
</Text>


<Text style={styles.value}>
{item.main.humidity}%
</Text>


</View>





<View>

<Text style={styles.label}>
Wind
</Text>


<Text style={styles.value}>
{item.wind.speed} km/h
</Text>


</View>



</View>



</View>


)


}







const styles=StyleSheet.create({


card:{


backgroundColor:"rgba(255,255,255,0.25)",

marginHorizontal:20,

marginVertical:8,

padding:20,

borderRadius:25,

borderWidth:1,

borderColor:"rgba(255,255,255,0.3)"


},




dateBox:{


flexDirection:"row",

alignItems:"center",

gap:8


},



date:{


color:"white",

fontSize:16,

fontWeight:"600"


},





weatherRow:{


flexDirection:"row",

alignItems:"center",

justifyContent:"space-between",

marginTop:15


},




condition:{


color:"white",

fontSize:16,

textTransform:"capitalize"


},




temp:{


color:"white",

fontSize:35,

fontWeight:"bold"


},




details:{


flexDirection:"row",

justifyContent:"space-around",

marginTop:20,

backgroundColor:"rgba(0,0,0,0.15)",

padding:12,

borderRadius:15


},



label:{


color:"#eee",

fontSize:13


},



value:{


color:"white",

fontWeight:"bold",

fontSize:16


}



});