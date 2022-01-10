import patrulhaBG from "assets/images/films/patrulha-canina-bg.webp";
import patrulhaLogo from "assets/images/films/patrulha-canina-logo.webp";
import areBG from "assets/images/films/are-you-the-one-bg.webp";
import areLogo from "assets/images/films/are-you-the-one-logo.webp";
import insidersBG from "assets/images/films/insiders-bg.webp";
import insidersLogo from "assets/images/films/insiders-logo.webp";
import play from "assets/images/play-icon.svg";
import info from "assets/images/info-icon.svg";

export const main: {
  id: number;
  bg: string;
  logo: string;
  synopsis: string;
}[] = [
  {
    id: 1,
    bg: patrulhaBG,
    logo: patrulhaLogo,
    synopsis:
      "Seis cachorrinhos heroicos liderados por um garoto de 10 anos realizam arriscadas missões de resgate sempre com bom humor, habilidades especiais e veículos muito legais!",
  },
  {
    id: 2,
    bg: areBG,
    logo: areLogo,
    synopsis:
      "Um grupo de solteiros precisa achar seus pares perfeitos para ter uma chance no amor e ganhar um belo prêmio em dinheiro.",
  },
  {
    id: 3,
    bg: insidersBG,
    logo: insidersLogo,
    synopsis:
      "Doze pessoas acreditam estar participando da seleção final para um reality mas, na verdade, estão sendo filmadas sem saber. O prêmio: 100 mil euros.",
  },
];

export const buttons: { play: string; info: string } = {
  play: play,
  info: info,
};
