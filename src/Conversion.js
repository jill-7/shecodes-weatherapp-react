import React, {useState} from "react";

export default function Conversion(props) {
    const [metric, setMetric] = useState("celcius");

    function convertToFahrenheit(event){
        event.preventDefault();
        setMetric("fahrenheit");
    }
    function convertToCelcius(event) {
        event.preventDefault();
        setMetric("celcius");
    }





    if(metric === "celcius") {
    return(
        <div>
          <span className="degrees">{Math.round(props.degrees)}</span>
          <span className="celcius">°C |{" "} <a href="/" onClick={convertToFahrenheit}>F</a></span>
        </div>
    )}else {
        let fahrenheit = (props.degrees * 9/5) + 32
        return(
            <div>
              <span className="degrees">{Math.round(fahrenheit)}</span>
              <span className="celcius"><a href="/" onClick={convertToCelcius}>°C</a>{" "} | F</span>
            </div>
        )

    }
}