import type { Brand } from "../types/brand";
import SAFLogo from "../assets/logos/SAFHolland.svg";
import CaterpillarLogo from "../assets/logos/caterpillar.svg";
import ManLogo from "../assets/logos/man.svg";
import LiebherrLogo from "../assets/logos/Liebherr.svg";
import ScaniaLogo from "../assets/logos/scania.svg";
import VolvoLogo from "../assets/logos/volvo.svg";
import PonsseLogo from "../assets/logos/Ponsse.svg";
import BPWLogo from "../assets/logos/bpw.svg";
import FuchsLogo from "../assets/logos/fuchs.svg";
import GigantLogo from "../assets/logos/gigant.svg";
import HitachiLogo from "../assets/logos/hitachi.svg";
import KomatsuLogo from "../assets/logos/komatsu.svg";
import MercedesLogo from "../assets/logos/mercedes-benz.svg";
import TerexLogo from "../assets/logos/terex.svg";

export const brands: Brand[] = [
  {
    name: "SAF",
    logo: SAFLogo,
    url: "https://safholland.com/int/en",
  },
  {
    name: "Volvo",
    logo: VolvoLogo,
    url: "https://www.volvocars.com/nl/",
  },
  {
    name: "Caterpillar",
    logo: CaterpillarLogo,
    url: "https://www.caterpillar.com/ru.html",
  },
  {
    name: "Man",
    logo: ManLogo,
    url: "https://www.man.eu/corporate/en/homepage.html",
  },
  {
    name: "Liebherr",
    logo: LiebherrLogo,
    url: "https://www.liebherr.com/en-us/mining-equipment/equipment/mining-trucks/mining-trucks-4707146",
  },
  {
    name: "Scania",
    logo: ScaniaLogo,
    url: "https://www.scania.com/",
  },
  {
    name: "Ponsse",
    logo: PonsseLogo,
    url: "https://www.ponsse.com/ru/",
  },
  {
    name: "BPW",
    logo: BPWLogo,
    url: "https://www.bpw.de/en/",
  },
  {
    name: "Fuchs",
    logo: FuchsLogo,
    url: "https://www.fuchs.com",
  },
  {
    name: "Gigant",
    logo: GigantLogo,
    url: "https://www.komatsu.ru/",
  },
  {
    name: "Hitachi",
    logo: HitachiLogo,
    url: "https://www.hitachi.com",
  },
  {
    name: "Komatsu",
    logo: KomatsuLogo,
    url: "https://www.komatsu.ru/",
  },
  {
    name: "Mercedes-Benz",
    logo: MercedesLogo,
    url: "https://www.mercedes-benz.com/en/",
  },
  {
    name: "Terex",
    logo: TerexLogo,
    url: "https://www.terex.com",
  },
];
