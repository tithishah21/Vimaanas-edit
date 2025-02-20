"use client";

interface ConnectButtonProps {
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const ConnectButton = ({ 
  onClick, 
  size = 'md',
  className = '',
  text = 'Connect Us'
}: ConnectButtonProps) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-[10px] sm:text-xs',
    md: 'px-3 py-2 text-xs',
    lg: 'px-6 py-3 text-sm'
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