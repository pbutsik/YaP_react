import { useState } from "react";
import { TemperatureInput } from "../components/temperature-input";
import { TemperatureScale, TTemperature } from "../types";
import "./styles.css";
import { toCelsius, toFahrenheit, tryConvert } from "../utils";

export const App = () => {
  const [{scale, temperature}, setValue] = useState<TTemperature>(
    {
      scale: TemperatureScale.CELCIUS,
      temperature: ""
    }
  )
  const handleCelciusChange = (temperature:string) => {
    setValue({ scale: TemperatureScale.CELCIUS, temperature})
  }
  const handleFahrenheitChange = (temperature: string) => {
    setValue({ scale: TemperatureScale.FAHRENHEIT, temperature})
  }

  const celcius = 
    scale === TemperatureScale.FAHRENHEIT ? tryConvert(temperature, toCelsius) : temperature

  const fahrenheit = 
    scale === TemperatureScale.CELCIUS ? tryConvert(temperature, toFahrenheit) : temperature

  return (
    <div className="page">
      <h1>Конвертер температуры</h1>
      <div className="content">
        <TemperatureInput 
          scale={TemperatureScale.CELCIUS} 
          temperature={celcius}
          onChange={handleCelciusChange}
        />
        <TemperatureInput
          scale={TemperatureScale.FAHRENHEIT} 
          temperature={fahrenheit}
          onChange={handleFahrenheitChange}
         />
      </div>
    </div>
  );
};