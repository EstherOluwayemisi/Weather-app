const API_KEY ="870c8ec7181ff6a4b9d5ff391a7de5cc"
const btn = document.getElementById("btn");
const cityInput = document.getElementById("cityInput");
const weatherBox = document.getElementById("Weather");
const errorText = document.getElementById("error");

btn.addEventListener("click",() => {
     const city = cityInput.value.trim()

    if (city ==="") {
        errorText.textContent = "Please enter a city name.";
        weatherBox.textContent =""
        return ;
    }
    errorText.textContent ="loading...";
    weatherBox.textContent="";

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
     .then(res => {
        if (!res.ok){
            throw new Error("city not found");
        }
         return res.json()
        })
         .then(data => {
         errorText.textContent = `The weather in ${data.name} is 
         ${data.main.temp} \u00B0C and ${data.weather[0].description}`
         })
         .catch (err => {
            errorText.textContent = "Error:"+ err.message;
         })
        })
