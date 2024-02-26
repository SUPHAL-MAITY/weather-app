const apikey="beefdfa89cd0780daac0ad501b4e5e48";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon= document.querySelector(".weather-icon");



const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");

async function checkweather(city){
  const response= await fetch(apiurl + city +`&appid=${apikey}`);

  if(response.status==404){
    document.querySelector(".weather").style.display="none";
    document.querySelector(".error").style.display="block";
    
  }else{
    var data= await response.json();
  
  if(data.weather[0].main=="Rain"){
  weatherIcon.src='images/images/rain.png';
}else if(data.weather[0].main=="Clear"){
  weatherIcon.src='images/images/clear.png';
} else if(data.weather[0].main=="Snow"){
  weatherIcon.src='images/images/snow.png';
}else if(data.weather[0].main=="Clouds"){
  weatherIcon.src='images/images/clouds.png';
}else if(data.weather[0].main=="drizzle"){
  weatherIcon.src='images/images/drizzle.png';
} else if(data.weather[0].main=="Mist"){
  weatherIcon.src='images/images/mist.png';
  }


  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";
    
    
  }

   
  

  console.log(data)
  document.querySelector(".city").innerHTML=data.name ;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    }
    
    
searchButton.addEventListener("click",()=>{
  checkweather(searchBox.value);
})
   
