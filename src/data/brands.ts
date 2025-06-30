import type { Brand } from "../types/brand";
import KamazLogo from "../assets/logos/kamaz.svg";
import CaterpillarLogo from "../assets/logos/caterpillar.svg";
import ManLogo from "../assets/logos/man.svg";
import LiebherrLogo from "../assets/logos/Liebherr.svg";
import ScaniaLogo from "../assets/logos/scania.svg";
import VolvoLogo from "../assets/logos/volvo.svg";
import PonsseLogo from "../assets/logos/Ponsse.svg";

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
  {
    name: "Caterpillar",
    logo: CaterpillarLogo,
    url: "https://kamaz.ru",
  },
  {
    name: "Man",
    logo: ManLogo,
    url: "https://volvo.com",
  },
  {
    name: "Liebherr",
    logo: LiebherrLogo,
    url: "https://kamaz.ru",
  },
  {
    name: "Scania",
    logo: ScaniaLogo,
    url: "https://volvo.com",
  },
  {
    name: "Ponsse",
    logo: PonsseLogo,
    url: "https://kamaz.ru",
  },
];
