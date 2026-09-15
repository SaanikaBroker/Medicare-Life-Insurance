
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
    type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-base sm:text-lg',
  };

  const variantStyles = {
    primary: 'bg-tn-accent text-white hover:bg-[#A32F1D] focus:ring-red-200 shadow-sm',
    secondary: 'bg-tn-primary text-white hover:bg-[#132A4B] focus:ring-blue-200 shadow-sm',
    outline: 'bg-transparent border border-tn-primary text-tn-primary hover:bg-tn-primary hover:text-white focus:ring-blue-200',
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