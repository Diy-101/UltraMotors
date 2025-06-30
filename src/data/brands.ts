import type { Brand } from "../types/brand";
import KamazLogo from "../assets/logos/kamaz.svg";
import VolvoLogo from "@/assets/logos/volvo.svg";

export const brands: Brand[] = [
  {
    name: "КамАЗ",
    logo: KamazLogo,
    url: "https://kamaz.ru",
  },
  {
    name: "Volvo",
    logo: VolvoLogo,
    url: "https://volvo.com",
  },
];
