import React from "react";

interface InputBoxProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  name?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  errorMessage,
  required = false,
  maxLength,
  minLength,
  name,
}) => {
  return (
    <div className="input-box">
      <label className="label" htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        className="input"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <style jsx>{`
        .input-box {
          margin-bottom: 1rem;
        }
        .label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        .required {
          color: red;
          margin-left: 0.2rem;
        }
        .input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .input:focus {
          outline: none;
          border-color: #0070f3;
        }
        .error-message {
          color: red;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default InputBox;
