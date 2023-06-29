/* eslint-disable no-unused-vars */

import { useMemo, useState } from "react";
import Label from "./components/Label";
import Slider from "./components/Slider";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

const App = () => {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  const getWeightStatus = (bmi) => {
    if (bmi < 18.5) {
      return <span className="italic text-yellow-300">(Under Weight)</span>;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return <span className="italic text-green-400">(Healthy Weight)</span>;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return <span className="italic text-red-400">(Over Weight)</span>;
    } else {
      return <span className="italic text-red-700">(Obesity)</span>;
    }
  };

  const weightStatus = getWeightStatus(output);

  return (
    <div className="h-screen grid place-items-center">
      <div className="card max-w-lg bg-gray-50 border border-gray-300 rounded-lg">
        <div className="heading py-5 bg-slate-900 rounded-t-lg grid place-items-center">
          <p className="text-white font-extrabold text-2xl tracking-tight">
            BMI CALCULATOR
          </p>
        </div>

        <div className="content px-10 py-7 w-[25rem]">
          {/* Weight Slider */}
          <Label>Weight : {weight}</Label>
          <Slider
            min={40}
            max={220}
            onChange={(e) => setWeight(e.target.value)}
          />

          {/* Height Slider */}
          <Label className="mt-5">Height : {height}</Label>
          <Slider
            min={150}
            max={220}
            onChange={(e) => setHeight(e.target.value)}
          />

          {/* Output */}
          <div className="container-output text-base font-medium text-gray-900 mt-5 text-center">
            Your BMI Is
            <br />
            <div className="output bg-slate-900 inline-block text-white font-bold px-6 py-2 rounded-md mt-2">
              {output} {weightStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
