import React from "react";

function Input({ ph, pattern, name, type, handleChange }) {
  return (
    <div>
      <input
        className="w-full placeholder:text-slate-400 placeholder:text-sm bg-white rounded-lg border border-gray-300 focus:border-primary focus:ring-amber-300 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        type={type}
        placeholder={ph}
        name={name}
        pattern={pattern}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
