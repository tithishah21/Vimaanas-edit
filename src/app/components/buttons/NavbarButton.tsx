"use client";

interface NavbarButtonProps {
  onClick: () => void;
  isSelected: boolean;
  className?: string;
  children: React.ReactNode;
}

export const NavbarButton = ({ onClick, isSelected, className = '', children }: NavbarButtonProps) => {
  const baseStyles = "transition-all duration-300 ease-in-out";
  const activeStyles = isSelected ? "border-red text-red" : "border-white text-white hover:border-red hover:text-red";

  return (
    <button
      onClick={onClick}
      className={`${activeStyles} ${baseStyles} border rounded-full px-2 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm tracking-wider capitalize whitespace-nowrap shrink-0 ${className}`}
    >
      {children}
    </button>
  );
};

export default NavbarButton;