<script>
            const apiKey="76b1a0bac373c8006049d3f2536ee278";
            const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

            const searchBox=document.querySelector(".search input");
            const searchBtn=document.querySelector(".search button");
            const weatherIcon=document.querySelector(".weather-icon");


            async function checkWeather(city){
                const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
                if (response.status==404){
                    document.querySelector(".error").style.display="block"; // as soon as we enter wrong city name error can be seen by default it will be hidden
                    document.querySelector(".weather").style.display="none"; // as soon as error occurs hide rest of the card
                }
                
                var data=await response.json()
                console.log(data)
                document.querySelector(".city").innerHTML= data.name; // this updates the city name
                document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C" ; // this updates the temp
                document.querySelector(".humidity").innerHTML= data.main.humidity+"%"; // this updates the humidity
                document.querySelector(".wind").innerHTML= data.wind.speed + "Kmph"; // this updates the wind

                if (data.weather[0].main=="Clouds"){
                    weatherIcon.src="images 2/clouds.png";
                }
                else if (data.weather[0].main=="Clear"){
                    weatherIcon.src="images 2/clear.png";
                }
                else if (data.weather[0].main=="Rain"){
                    weatherIcon.src="images 2/rain.png";
                }
                else if (data.weather[0].main=="Drizzle"){
                    weatherIcon.src="images 2/drizzle.png";
                }
                else if (data.weather[0].main=="Mist"){
                    weatherIcon.src="images 2/mist.png";
                }

                document.querySelector(".weather").style.display="block"; // as soon as we enter city name we will see full info/card by default only search box and button will come
            }    
            searchBtn.addEventListener("click",()=>{
                checkWeather(searchBox.value)  //here we are adding city name in function as soon as search button is clicked
            })
            
        </script>