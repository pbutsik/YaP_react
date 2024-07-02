import { useState } from "react";
import "./styles.css";
import { TTemperature, TemperatureScale } from "../../types";

type TTemperatureInputProps = {
  scale: TemperatureScale;
  temperature: string
  onChange: (temperature:string) => void
};

export const TemperatureInput = ({ scale, temperature, onChange }: TTemperatureInputProps) => {
  // const [value, setValue] = useState<TTemperature>({ scale, temperature: "" });

  return (
    <fieldset className="card">
      <label className="label">
        Введите температуру в {scale}:
        <input
          className="input"
          name="name"
          type="text"
          inputMode="numeric"
          value={temperature}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
};