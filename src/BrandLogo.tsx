import React from "react";

type BrandLogoProps = {
  logo: React.FC<React.SVGProps<SVGSVGElement>> | string; // либо React-компонент, либо путь к картинке
  name: string;
};

export const BrandLogo: React.FC<BrandLogoProps> = ({ logo: Logo, name }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      {typeof Logo === "string" ? (
        <img src={Logo} alt={name} className="w-16 h-16 object-contain mb-2" />
      ) : (
        <Logo className="w-16 h-16 mb-2 text-gray-800" />
      )}
      <span className="text-center text-sm font-medium text-gray-700">
        {name}
      </span>
    </div>
  );
};
