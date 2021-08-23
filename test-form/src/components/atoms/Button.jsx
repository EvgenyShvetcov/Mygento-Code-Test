import React from "react";

export const Button = ({ label, className, type, icon, ...props }) => {
  return (
    <>
      {!icon ? (
        <button
          className={className ? className : "button"}
          type={type}
          {...props}
        >
          {label}
        </button>
      ) : (
        <button className={className} type={type} {...props}>
          <span className="">{icon}</span>
        </button>
      )}
    </>
  );
};
