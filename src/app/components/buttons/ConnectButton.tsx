"use client";

interface ConnectButtonProps {
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg' | 'auto';
  className?: string;
  text?: string;
}

export const ConnectButton = ({ 
  onClick, 
  size = 'md',
  className = '',
  text = 'Connect Us'
}: ConnectButtonProps) => {
  // Fixed size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm', 
    md: 'px-6 py-3 text-lg', 
    lg: 'px-10 py-5 text-xl', 
    auto: 'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-10 lg:py-5 lg:text-xl'
  };

  return (
    <button 
      onClick={onClick}
      className={`
        bg-red text-white 
        border border-white 
        rounded-full 
        tracking-wider 
        whitespace-nowrap 
        hover:bg-red
        transition-colors 
        duration-300 
        shrink-0
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default ConnectButton;