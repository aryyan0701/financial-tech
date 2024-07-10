import React, { useState } from "react";
import { IoMdMale } from "react-icons/io";
import { IoFemaleSharp } from "react-icons/io5";
import { FaTransgender } from "react-icons/fa"
import { Link } from "react-router-dom";
const UserForm = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
    <div className="bg-white p-8 rounded-2xl shadow-md w-150">
      <h2 className="text-2xl font-bold mb-6">Help us find the best path for you</h2>
      <div className="mb-6">
        <p className="mb-2">Tell us about yourself, you are a...</p>
        <div className="flex justify-between">
          <button
            className={`p-2 border rounded ${gender === "male" ? "bg-green-500 text-white" : ""}`}
            onClick={() => setGender("male")}
          >
            Male<IoMdMale className="inline ml-2 mb-1"/>
          </button>
          <button
            className={`p-2 border rounded ${gender === "female" ? "bg-green-500 text-white" : ""}`}
            onClick={() => setGender("female")}
          >
            Female<IoFemaleSharp className="inline ml-2 mb-1"/>
          </button>
          <button
            className={`p-2 border rounded ${gender === "transgender" ? "bg-green-500 text-white" : ""}`}
            onClick={() => setGender("transgender")}
          >
            Transgender<FaTransgender className="inline ml-2 mb-1"/>
          </button>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2">And your age is</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2  border-gray border-2 rounded"
        />
      </div>
      <div className="mb-4">
        <p className="mb-2">Your monthly salary</p>
        <input
          type="number"
          className="w-full p-2 border-gray border-2 rounded"
        />
      </div>
      <div className="mb-4">
        <p className="mb-2">Your city</p>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2  border-gray border-2 rounded"
        />
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded"><Link to="/dashboard">Next</Link></button>
    </div>
    </div>
  );
};

export default UserForm;
