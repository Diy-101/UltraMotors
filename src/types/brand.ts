// types/brand.ts
export type Brand = {
  name: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>> | string;
  url: string;
};
