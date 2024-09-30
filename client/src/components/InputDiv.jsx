import { useState } from "react";

const InputDiv = ({
  input,
  setInput,
  type,
  item,
  label,
  disableAnimation = false
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative w-full mb-4">
      <input
        type={type}
        value={input}
        onChange={(e) => handleInputChange(item, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!!input)}
        className={`w-full px-3 py-2 text-gray-700 border rounded-sm transition-colors duration-300 ease-in-out bg-white ${
          disableAnimation
            ? "focus:outline-none"
            : "focus:outline-none focus:border-slate-gray/50"
        }`}
        placeholder={isFocused || input ? "" : label}
      />
      <label
        className={`absolute left-3 transition-all duration-200 ease-in-out ${
          isFocused || input
            ? "-top-2.5 text-xs text-slate-gray bg-white px-1"
            : "top-2 text-gray-500"
        }`}
      >
        {label}
      </label>
      {!disableAnimation && (
        <div
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-gray/30 transform scale-x-0 transition-transform duration-300 ${
            isFocused ? "scale-x-100" : ""
          }`}
        ></div>
      )}
    </div>
  );
};

export default InputDiv;
