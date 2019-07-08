import { SortedMap } from "immutable-sorted";
import { EGreekAllowedAccentCombinations, GreekAccents, IGreekAccents } from "./accents";

export enum EGreekLetter {
  Alpha   = 1,
  Beta    = 2,
  Gamma   = 3,
  Delta   = 4,
  Epsilon = 5,
  Zeta    = 6,
  Eta     = 7,
  Theta   = 8,
  Iota    = 9,
  Kappa   = 10,
  Lambda  = 11,
  Mu      = 12,
  Nu      = 13,
  Xi      = 14,
  Omicron = 15,
  Pi      = 16,
  Rho     = 17,
  Sigma   = 18,
  Tau     = 19,
  Upsilon = 20,
  Phi     = 21,
  Chi     = 22,
  Psi     = 23,
  Omega   = 24,
}

export class GreekLetter {
  public static indexMap: SortedMap<EGreekAllowedAccentCombinations, number>  = SortedMap(
    [[ EGreekAllowedAccentCombinations.Comb_None, 0],
     [ EGreekAllowedAccentCombinations.Comb_SpiritusLenis,  1],
     [ EGreekAllowedAccentCombinations.Comb_SpiritusAsper,  2],
     [ EGreekAllowedAccentCombinations.Comb_GravisSpiritusLenis,  3],
     [ EGreekAllowedAccentCombinations.Comb_GravisSpiritusAsper,  4],
     [ EGreekAllowedAccentCombinations.Comb_AkutSpiritusLenis,  5],
     [ EGreekAllowedAccentCombinations.Comb_AkutSpiritusAsper,  6],
     [ EGreekAllowedAccentCombinations.Comb_CircumflexSpiritusLenis,  7],
     [ EGreekAllowedAccentCombinations.Comb_CircumflexSpiritusAsper, 8],
     [ EGreekAllowedAccentCombinations.Comb_Gravis,  9],
     [ EGreekAllowedAccentCombinations.Comb_Akut,  10],
     [ EGreekAllowedAccentCombinations.Comb_SpiritusLenisIotaSubscriptum, 11],
     [ EGreekAllowedAccentCombinations.Comb_SpiritusAsperIotaSubscriptum, 12],
     [ EGreekAllowedAccentCombinations.Comb_GravisSpiritusLenisIotaSubscriptum, 13],
     [ EGreekAllowedAccentCombinations.Comb_GravisSpiritusAsperIotaSubscriptum, 14],
     [ EGreekAllowedAccentCombinations.Comb_AkutSpiritusLenisIotaSubscriptum, 15],
     [ EGreekAllowedAccentCombinations.Comb_AkutSpiritusAsperIotaSubscriptum, 16],
     [ EGreekAllowedAccentCombinations.Comb_SpiritusLenisCircumflexIotaSubscriptum, 17],
     [ EGreekAllowedAccentCombinations.Comb_SpiritusAsperCircumflexIotaSubscriptum, 18],
     [ EGreekAllowedAccentCombinations.Comb_Breve, 19],
     [ EGreekAllowedAccentCombinations.Comb_Makron, 20],
     [ EGreekAllowedAccentCombinations.Comb_GravisIotaSubscriptum, 21],
     [ EGreekAllowedAccentCombinations.Comb_IotaSubscriptum, 22],
     [ EGreekAllowedAccentCombinations.Comb_AkutIotaSubscriptum, 23],
     [ EGreekAllowedAccentCombinations.Comb_Circumflex, 24],
     [ EGreekAllowedAccentCombinations.Comb_CircumflexIotaSubscriptum , 25],
     [ EGreekAllowedAccentCombinations.Comb_GravisDialytika, 26],
     [ EGreekAllowedAccentCombinations.Comb_AkutDialytika, 27],
     [ EGreekAllowedAccentCombinations.Comb_CircumflexDialytika, 28],
     [ EGreekAllowedAccentCombinations.Comb_Dialytika, 29],
     [ EGreekAllowedAccentCombinations.Comb_Tonos, 30],
     [ EGreekAllowedAccentCombinations.Comb_DialytikaTonos, 31],
     [ EGreekAllowedAccentCombinations.Comb_EndOfWord, 32]]);

  private letter: EGreekLetter;
  private accents: GreekAccents;
  private upperCase: boolean = false;

  constructor(letter: EGreekLetter, accents?: IGreekAccents, upperCase?: boolean) {
    if (typeof (letter) === "number" && Number.isInteger(letter) &&
        letter >= EGreekLetter.Alpha && letter <= EGreekLetter.Omega) {
      this.letter = letter;
      this.accents = new GreekAccents(accents);
      this.upperCase = upperCase || false;
    } else {
      throw RangeError(letter.toString());
    }
  }

  private isValid(letter: EGreekLetter, accent: GreekAccents, upperCase: boolean): boolean {
    const accentIndex = this.accents._internalRepresentation();
    if (!GreekLetter.indexMap.hasOwnProperty(accentIndex)) {
      return false;
    }
    return true;
  }
}
