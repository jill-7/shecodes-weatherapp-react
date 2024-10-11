import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import Calendar from "./Calendar";
import Conversion from "./Conversion";

export default function Weather(props){
    const[ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city,setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            temperature: response.data.temperature.feels_like,
            city: response.data.city,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            iconURl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
            description: response.data.condition.description,
            time: new Date (response.data.time * 1000)
            
        })

        setReady(true);
    }
    function search() {
        const apiKey = "83d92b9c8f0fcoa600da63ca304tf074";
   
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function submitCity(event){
        event.preventDefault();
        search(city);
    }
    function changeCity(event){
        setCity(event.target.value);
    }
    
    
    if(ready){
    return(
        <div className="Weather">
            <form className="form" onSubmit={submitCity}>
                
                     <input type="search" placeholder="Enter a city..." className="search" onChange={changeCity} />
                    
                     <input type="submit" value="Search" className="submit" />
                    
                
            </form>
            <div className="row">
                <div className="col-6">
                    <h1>{weatherData.city}</h1>
                    <p className="time"><Calendar time= {weatherData.time}/></p>
                    <p className="weather-description text-capitalize"> {weatherData.description}</p>
                    <p className="description">Humidity: <span className="speed">{weatherData.humidity}%</span>, Wind: <span className="speed">{weatherData.wind} km/h</span></p>
                </div>
                <div className="col-6">
                    <img src={weatherData.iconURl} alt="weather icons" /> 
                    <div className="temp">
                        <Conversion degrees= {Math.round(weatherData.temperature)}/>
                    </div>
                    
                </div>
            </div>
            <p className="footer">This project was coded by 
                <a href="https://github.com/jill-7" target="_blank" rel="noreferrer">Jilloh</a> and is 
                <a href="https://github.com/jill-7/shecodes-weatherapp-react" target="_blank" rel="noreferrer">open sourced on Github</a> and 
                <a href="https://teal-arithmetic-796dd8.netlify.app/" target="_blank" rel="noreferrer">hosted by Netlify</a></p>

        </div>
    )
    }else{
    search();

    return "Searching...";
}
}