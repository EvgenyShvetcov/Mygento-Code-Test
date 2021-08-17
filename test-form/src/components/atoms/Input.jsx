import React, { useState, useEffect } from 'react';

export const Input = ({
  className = '',
  required,
  type = 'text',
  label,
  value,
  ...props
}) => {
  // const [err, showErr] = useState(false);
  const [blurMessage, setBlurMessage] = useState(false);

  // useEffect(()=> {if (type === 'text')},[])

  return (
    <div>
      <div>
        {label}
        {required && '*'}
      </div>
      <input
        onBlur={() => setBlurMessage(true)}
        onFocus={() => setBlurMessage(false)}
        type={type}
        className={`input ${className}`}
        value={value}
        {...props}
      ></input>
      {/* {err && type === 'text' && <div>В имени могут быть только буквы</div>} */}
      {!value &&
        blurMessage &&
        type === 'text' &&
        label === 'Имя' &&
        required && <div>Пожалуйста укажите ваше имя</div>}
      {!value &&
        blurMessage &&
        type === 'text' &&
        label === 'Фамилия' &&
        required && <div>Пожалуйста укажите вашу фамилию</div>}
      {!value && blurMessage && type === 'email' && required && (
        <div>Пожалуйста укажите электронную почту</div>
      )}
    </div>
  );
};
