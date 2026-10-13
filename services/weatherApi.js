import {
API_KEY,
BASE_URL
}
from "../constants/config";



export const getWeather = async(city)=>{


const response =
await fetch(

`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`

);


const data =
await response.json();


if(data.cod !== 200){

throw new Error(data.message);

}


return data;


};





export const getForecast = async(city)=>{


const response =
await fetch(

`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`

);


const data =
await response.json();


if(data.cod !== "200"){

throw new Error(data.message);

}


return data;


};