import React from 'react';

export const Button = ({label,className,type, ...props}) => {


        return(
                <button className={className} type={type} {...props}>{label}</button>
        )
}