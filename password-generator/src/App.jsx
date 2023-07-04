/* eslint-disable no-unused-vars */
import React from "react";
import Label from "./components/Label";
import Checkbox from "./components/Checkbox";

import { BsFillClipboardFill } from "react-icons/bs";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="font-[Inter] h-screen grid place-items-center">
      <div className="card max-w-md p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h1 className="font-bold text-xl text-center">Password generator</h1>

        {/* ouput password */}
        <div className="output w-full mt-4 bg-slate-900 py-2 px-4 flex justify-between items-center rounded-md">
          <span className="text-white font-medium text-sm">
            bxoYKrCANqgJyBvTVPaxlZjftIvgJED
          </span>
          <BsFillClipboardFill
            className="text-white ml-5 cursor-pointer"
            onClick={() => console.log("copy to clipboard")}
          />
        </div>

        {/* password length */}
        <div className="mt-4 flex justify-between items-center">
          <Label>Password Length</Label>
          <input
            type="text"
            defaultValue={26}
            onChange={() => {}}
            max={26}
            min={8}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-12 p-2 text-center"
          />
        </div>

        {/* checkbox */}
        <div className="flex items-center mb-4 mt-4">
          <Checkbox />
          <Label>Add Uppercase Letters</Label>
        </div>
        <div className="flex items-center mb-4">
          <Checkbox />
          <Label>Add Lowercase Letters</Label>
        </div>
        <div className="flex items-center mb-4">
          <Checkbox />
          <Label>Include Numbers</Label>
        </div>
        <div className="flex items-center">
          <Checkbox />
          <Label>Include symbols</Label>
        </div>

        {/* button */}
        <Button>Generate Password</Button>
      </div>
    </div>
  );
};

export default App;
