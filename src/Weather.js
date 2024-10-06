import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <input type="search"/>
            <input type="submit" value="Search"/>
            <div className="row">
                <div className="col-6">
                    <h1>Nairobi</h1>
                    <p>Sunday 21:28, broken clouds</p>
                    <p>Humidity: 80%, Wind: 4.79km/h</p>
                </div>
                <div className="col-6">
                    <p>27°C</p>
                </div>
            </div>

        </div>
    )
}