import React from "react";
import type { Brand } from "./types/brand";

export const BrandLogo: React.FC<Brand> = ({ logo: Logo, name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center py-8 px-6 bg-gray-100 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer group"
    >
      <div className="flex items-center space-x-3 transition-all duration-300">
        {typeof Logo === "string" ? (
          <img
            src={Logo}
            alt={name}
            className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <Logo className="w-14 h-14 text-gray-400 group-hover:text-inherit filter grayscale group-hover:grayscale-0 transition-all duration-300" />
        )}
        <span className="text-xl font-bold text-gray-500 transition-colors duration-300 group-hover:text-gray-800">
          {name}
        </span>
      </div>
    </a>
  );
};
