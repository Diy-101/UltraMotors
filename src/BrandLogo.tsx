import React from "react";
import type { Brand } from "./types/brand";

export const BrandLogo: React.FC<Brand> = ({ logo: Logo, name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center py-8 px-6 bg-gray-100 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
    >
      <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300">
        {typeof Logo === "string" ? (
          <img
            src={Logo}
            alt={name}
            className="w-10 h-10 object-contain text-gray-400"
          />
        ) : (
          <Logo className="w-10 h-10 text-gray-400" />
        )}
        <span className="text-xl font-bold text-gray-500 transition-colors duration-300">
          {name}
        </span>
      </div>
    </a>
  );
};
