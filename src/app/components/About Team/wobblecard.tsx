import { WobbleCard } from "./WobbleCard1";

interface StandardWobbleCardProps {
  title: string;
  subtitle: string;
  message: string | React.ReactNode; 
  titleColor?: string;
  subtitleColor?: string;
  textColor?: string;
  bgColor?: string; 
  borderColor?: string;
}

export const StandardWobbleCard = ({
  title,
  subtitle,
  message,
  titleColor = "#FD0000",
  subtitleColor = "#000000",
  textColor = "#3F3F3F",
  bgColor = "#F5F5F5",
  borderColor = "#F5F5F5",
}: StandardWobbleCardProps) => {
  return (
    <WobbleCard containerClassName="w-[90vw] lg:w-[40vw] h-auto lg:h-[30vw] relative">
      {/* Pink Shadow Background */}
      <div className="absolute inset-0 bg-red-900 rounded-3xl blur-xl opacity-60"></div>

      {/* Main Card Content */}
      <div
        className="relative w-full h-full rounded-3xl border-4 flex flex-col justify-center items-center text-center p-6"
        style={{ backgroundColor: bgColor, borderColor: borderColor }}
      >
        {/* Title */}
        <div
          className="font-monument-extended font-ultrabold text-3xl md:text-4xl lg:text-5xl pt-5 lg:pt-0"
          style={{ color: titleColor }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          className="font-monument-extended font-ultrabold text-3xl md:text-4xl lg:text-5xl mb-7"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </div>

        {/* Message */}
        <div
          className="font-ultrabold tracking-wider text-lg lg:text-xl leading-tight"
          style={{ color: textColor }}
        >
          {message}
        </div>
      </div>
    </WobbleCard>
  );
};
