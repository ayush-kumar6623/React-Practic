import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Button.css';

function Button({ children, onClick, to, type = 'button', variant = 'primary', className = '' }) {
  const buttonClass = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;
