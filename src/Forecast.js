import React, {useState, useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import Forecastday from "./Forecastday";

export default function Forecast(props) {
    const [loading, setLoading] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoading(false);
    }, [props.city]);


    function handleForecast(response) {
        console.log(response.data);
        setForecastData(response.data.daily);
        setLoading(true);
    }
    
    


    if (loading) {
    
    return(
        <div className="forecast">
            <div className="row">
                <div className="col-2">
                   <Forecastday details = {forecastData[0]} />
                </div>
                <div className="col">
                   <Forecastday details = {forecastData[1]} />
                </div>
                <div className="col">
                   <Forecastday details = {forecastData[2]} />
                </div>
                <div className="col">
                   <Forecastday details = {forecastData[3]} />
                </div>
                <div className="col">
                   <Forecastday details = {forecastData[4]} />
                </div>
               
               
            </div>
        </div>

    );
}else {
    let apiKey = "83d92b9c8f0fcoa600da63ca304tf074";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleForecast);


}
}