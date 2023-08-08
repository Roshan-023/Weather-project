const apiKey = "85e616a8e002342422c0cc66cb648c4d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const WeatherIcon = document.querySelector(".weather-icon")

async function check(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const weatherElement = document.querySelector(".card");

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

        weatherElement.classList.add("shake");
    }
    else{

        document.querySelector(".error").style.display = "none";
        weatherElement.classList.remove("shake");
        var data = await response.json();

        console.log(data)
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "images/clouds.png";
        }
    
        if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "images/clear.png";
        }
    
        if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "images/drizzle.png";
        }
    
        if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "images/mist.png";
        }
    
        if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "images/rain.png";
        }
    
        if(data.weather[0].main == "Snow"){
            WeatherIcon.src = "images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    check(searchBox.value) 
})

check();