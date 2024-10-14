import React from "react";

export default function Forecastday(props) {
   function chosenDay() {
    let today = new Date(props.details.temperature.day * 1000);
    let day = today.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
   }

    return(
        <div className="forecastday">
            <div>{chosenDay()}</div>
                   <div className="image">
                     <img src = {`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.details.condition.icon}.png`} alt="weather-icon"/>
                   </div>
                   <div className="temperatures">
                    <span className="max-temp">{Math.round(props.details.temperature.maximum)}°</span>
                    <span className="min-temp">{Math.round(props.details.temperature.minimum)}°</span>
                   </div>
        </div>

    );
}