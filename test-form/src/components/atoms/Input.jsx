import React, { useState, useEffect } from "react";

export const Input = ({
  className = "",
  required,
  type = "text",
  label,
  value,
  focused,
  warn,
  onHover,
  disabled = false,
  filled,
  ...props
}) => {
  // const [err, showErr] = useState(false);
  const [blurMessage, setBlurMessage] = useState(false);

  useEffect(()=> {if (warn=== true){setBlurMessage(true)}},[warn])

  return (
    <div className={`input`}>
      <div className={`input__label`}>
        {label}
        {required && " *"}
      </div>
      <input
        onBlur={() => setBlurMessage(true)}
        onFocus={() => setBlurMessage(false)}
        type={type}
        className={`input__pole ` + (blurMessage && !value && required ? "-warning" : '')}
        value={value}
        onHover={disabled ? onHover: ''}
        disabled={disabled}
        {...props}
      ></input>
      {/* {err && type === 'text' && <div>В имени могут быть только буквы</div>} */}
      {!value &&
        blurMessage &&
        type === "text" &&
        label === "Имя" &&
        required && (
          <div className={`input__warning`}>Пожалуйста укажите ваше имя</div>
        )}
      {!value &&
        blurMessage &&
        type === "text" &&
        label === "Фамилия" &&
        required && (
          <div className={`input__warning`}>
            Пожалуйста укажите вашу фамилию
          </div>
        )}
      {!value && blurMessage && type === "email" && required && (
        <div className={`input__warning`}>
          Пожалуйста укажите электронную почту
        </div>
      )}
    </div>
  );
};
