import React, { FunctionComponent, useState } from 'react';


interface ButtonType {
    onClick: () => void,
    label: string,
    color?: string,
    size?: string,
    disabled?: boolean,
    customButtonStyle?: Object 
}


const Button: FunctionComponent<ButtonType> = ({ onClick, label, color='#ffffff', size='20px', disabled=false, customButtonStyle }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
  const buttonStyle = {
    backgroundColor: 'transparent',
    fontSize: size,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    color: 'white',
    fontWeight: isHover === false ? '300' : '400',
    border: 'none',
    textDecoration: isHover === false ? 'none' : 'underline',
    ...customButtonStyle
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};

export default Button;