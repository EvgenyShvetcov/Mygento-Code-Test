import React from 'react';

export const Button = ({...props, label}) => {


        return(
                <button className={className} type={type} {...props}>{label}</button>
        )
}