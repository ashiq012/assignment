import React from "react";

const InputField = ({
  label = "Username",
  placeholder = "Enter your username",
  helperText = "",
  errorMessage = "",
  disabled = false,
  invalid = false,
  loading = false,
  variant = "outlined", 
  size = "medium", 
  value,
  onChange,
}) => {
  const baseStyles = "rounded-md focus:outline-none border w-full";

  const variants = {
    outlined: "border-gray-400 focus:border-blue-500",
    filled: "bg-gray-100 border-transparent focus:border-blue-500",
    ghost: "border-none bg-transparent",
  };

  const sizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
  };

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled || loading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
          invalid ? "border-red-500" : ""
        }`}
      />
      {loading && <p className="text-blue-500 text-sm mt-1">Loading...</p>}
      {helperText && !invalid && (
        <p className="text-gray-500 text-sm mt-1">{helperText}</p>
      )}
      {invalid && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
