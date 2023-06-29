/* eslint-disable no-unused-vars */

import { useMemo, useState } from "react";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

const App = () => {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  const onWeightChange = (event) => {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
    console.log(inputWeight);
  };

  const output = useMemo(() => {
    const calculatedHeight = height / 100
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1)
  }, [weight, height])

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
          <label
            htmlFor="minmax-range"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Weight : {weight}
          </label>
          <input
            onChange={(e) => setWeight(e.target.value)}
            type="range"
            min="40"
            max="220"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
          />

          {/* Height Slider */}
          <label
            htmlFor="minmax-range"
            className="block mb-2 text-base font-medium text-gray-900 mt-5"
          >
            Height : {height}
          </label>
          <input
            onChange={(e) => setHeight(e.target.value)}
            type="range"
            min="150"
            max="220"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
          />

          <div className="container-output text-base font-medium text-gray-900 mt-5 text-center">
            Your BMI Is
            <br />
            <div className="output bg-slate-900 inline-block text-white font-bold px-6 py-2 rounded-md mt-2">
              {output}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
