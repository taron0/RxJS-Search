import React from 'react';

const Input = ({ type,  onChange, className, name, placeholder, ref }) => {
    return (
        <>
            <input
                type={type}
                className={className}
                placeholder="Search github username..."
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                ref={ref}
            />
        </>
    );
};

export default Input;
