/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Label from "./components/Label";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

import { BsFillClipboardFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COPY_FAIL, COPY_SUCCESS } from "./constant/message";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setincludeSymbols] = useState(false);

  const handleGeneratePassword = () => {};

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleCopyPassword = (e) => {
    if (password === "") {
      notify(COPY_FAIL, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };

  return (
    <div className="font-[Inter] h-screen grid place-items-center">
      <div className="card max-w-md p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h1 className="font-bold text-xl text-center">Password generator</h1>

        {/* ouput password */}
        <div className="output w-full mt-4 bg-slate-900 py-2 px-4 flex justify-between items-center rounded-md">
          <span className="text-white font-medium text-sm">{password}</span>
          <BsFillClipboardFill
            className="text-white ml-5 cursor-pointer"
            onClick={handleCopyPassword}
          />
        </div>

        {/* password length */}
        <div className="mt-4 flex justify-between items-center">
          <Label>Password Length</Label>
          <input
            type="text"
            defaultValue={passwordLength}
            onChange={() => {}}
            max={26}
            min={8}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-12 p-2 text-center"
          />
        </div>

        {/* checkbox */}
        <div className="flex items-center mb-4 mt-4">
          <Checkbox
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.value)}
          />
          <Label>Add Uppercase Letters</Label>
        </div>
        <div className="flex items-center mb-4">
          <Checkbox
            checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.value)}
          />
          <Label>Add Lowercase Letters</Label>
        </div>
        <div className="flex items-center mb-4">
          <Checkbox
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.value)}
          />
          <Label>Include Numbers</Label>
        </div>
        <div className="flex items-center">
          <Checkbox
            checked={includeSymbols}
            onChange={(e) => setincludeSymbols(e.target.value)}
          />
          <Label>Include symbols</Label>
        </div>

        {/* button */}
        <Button onClick={handleGeneratePassword}>Generate Password</Button>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default App;
