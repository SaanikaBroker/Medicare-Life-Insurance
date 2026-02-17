
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  // FIX: Added 'type' property to allow setting button type (e.g., "submit").
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    size = 'lg', 
    className = '',
    as = 'button',
    href,
    // FIX: Destructured 'type' prop with a default value.
    type = 'button'
}) => {
  const baseStyles = 'inline-block font-bold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2';
  
  const sizeStyles = {
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  const variantStyles = {
    primary: 'bg-tn-accent text-white hover:bg-red-800 focus:ring-red-300',
    secondary: 'bg-tn-primary text-white hover:bg-blue-900 focus:ring-blue-300',
    outline: 'bg-transparent border-2 border-tn-primary text-tn-primary hover:bg-tn-primary hover:text-white focus:ring-blue-300',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (as === 'a') {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    // FIX: Passed the 'type' prop to the underlying button element.
    <button onClick={onClick} className={combinedClassName} type={type}>
      {children}
    </button>
  );
};

export default Button;