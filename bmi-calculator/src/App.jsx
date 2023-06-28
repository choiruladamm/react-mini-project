/* eslint-disable no-unused-vars */

import { useState } from "react";

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

  return (
    <div className="h-screen grid place-items-center">
      <div className="card max-w-lg bg-gray-50 border border-gray-300 rounded-lg">
        <div className="heading h-20 bg-slate-900 rounded-t-lg grid place-items-center">
          <p className="text-white font-extrabold text-2xl tracking-tight">
            BMI CALCULATOR
          </p>
        </div>

        <div className="content p-10 w-[25rem]">
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
        </div>
      </div>
    </div>
  );
};

export default App;
