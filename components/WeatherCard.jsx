import {
    View,
    Text,
    StyleSheet
} from "react-native";


import {
    Ionicons
} from "@expo/vector-icons";



export default function WeatherCard({data}){


const weather = data.weather[0].main;



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


{/* City */}

<View style={styles.header}>


<Ionicons
name="location"
size={25}
color="white"
/>


<Text style={styles.city}>
{data.name}
</Text>


</View>





{/* Weather Icon */}

<Ionicons

name={getIcon()}

size={100}

color="#FFD93D"

style={styles.icon}

/>





{/* Temperature */}

<Text style={styles.temp}>

{Math.round(data.main.temp)}°

</Text>


<Text style={styles.celsius}>
C
</Text>





<Text style={styles.desc}>

{data.weather[0].description}

</Text>






{/* Details */}


<View style={styles.details}>


<InfoCard

icon="water"

title="Humidity"

value={`${data.main.humidity}%`}

/>



<InfoCard

icon="speedometer"

title="Wind"

value={`${data.wind.speed} m/s`}

/>



<InfoCard

icon="thermometer"

title="Pressure"

value={`${data.main.pressure}`}

/>



<InfoCard

icon="cloud"

title="Cloud"

value={`${data.clouds.all}%`}

/>



</View>



</View>


)

}





function InfoCard({icon,title,value}){


return(

<View style={styles.info}>


<Ionicons

name={icon}

size={25}

color="white"

/>


<Text style={styles.infoTitle}>
{title}
</Text>


<Text style={styles.infoValue}>
{value}
</Text>


</View>

)

}








const styles=StyleSheet.create({



card:{


margin:20,

padding:25,

borderRadius:35,


backgroundColor:"rgba(255,255,255,0.25)",


borderWidth:1,

borderColor:"rgba(255,255,255,0.4)",



alignItems:"center"


},





header:{


flexDirection:"row",

alignItems:"center",

gap:8


},



city:{


fontSize:30,

fontWeight:"bold",

color:"white"


},





icon:{


marginTop:20


},




temp:{


fontSize:80,

fontWeight:"bold",

color:"white"


},




celsius:{


fontSize:30,

color:"white",

position:"absolute",

right:80,

top:170


},





desc:{


fontSize:22,

color:"white",

textTransform:"capitalize",

marginBottom:25


},






details:{


flexDirection:"row",

flexWrap:"wrap",

justifyContent:"center"

},





info:{


width:130,

height:100,


backgroundColor:"rgba(0,0,0,0.15)",


borderRadius:20,


margin:6,


alignItems:"center",

justifyContent:"center"


},





infoTitle:{


color:"#ddd",

fontSize:14,

marginTop:5


},





infoValue:{


color:"white",

fontSize:18,

fontWeight:"bold"


}



});