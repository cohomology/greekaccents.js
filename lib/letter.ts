import { SortedMap } from "immutable-sorted";
import { EGreekAccent, EGreekAllowedAccentCombinations, GreekAccents, IGreekAccents } from "./accents";

export enum EGreekLetter {
  Alpha   = 0,
  Beta    = 1,
  Gamma   = 2,
  Delta   = 3,
  Epsilon = 4,
  Zeta    = 5,
  Eta     = 6,
  Theta   = 7,
  Iota    = 8,
  Kappa   = 9,
  Lambda  = 10,
  Mu      = 11,
  Nu      = 12,
  Xi      = 13,
  Omicron = 14,
  Pi      = 15,
  Rho     = 16,
  Sigma   = 17,
  Tau     = 18,
  Upsilon = 19,
  Phi     = 20,
  Chi     = 21,
  Psi     = 22,
  Omega   = 23,
}

export enum EGreekLetterErrorHandling {
  ThrowException = 0,
  ResetAccents   = 1,
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
  private static letters = [["\u03B1", "\u1F00", "\u1F01", "\u1F02", "\u1F03", "\u1F04", "\u1F05", "\u1F06",
         "\u1F07", "\u1F70", "\u1F71", "\u1F80", "\u1F81", "\u1F82", "\u1F83", "\u1F84", "\u1F85", "\u1F86",
         "\u1F87", "\u1FB0", "\u1FB1", "\u1FB2", "\u1FB3", "\u1FB4", "\u1FB6", "\u1FB7", "", "", "", "",
         "\u03AC", "", ""],
    ["\u03B2", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03B3", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03B4", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03B5", "\u1F10", "\u1F11", "\u1F12", "\u1F13", "\u1F14", "\u1F15", "", "", "\u1F72", "\u1F73", "", "", "",
         "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\u03AD", "", ""],
    ["\u03B6", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03B7", "\u1F20", "\u1F21", "\u1F22", "\u1F23", "\u1F24", "\u1F25", "\u1F26", "\u1F27", "\u1F74", "\u1F75",
         "\u1F90", "\u1F91", "\u1F92", "\u1F93", "\u1F94", "\u1F95", "\u1F96", "\u1F97", "", "", "\u1FC2", "\u1FC3",
         "\u1FC4", "\u1FC6", "\u1FC7", "", "", "", "", "\u03AE", "", ""],
    ["\u03B8", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03B9", "\u1F30", "\u1F31", "\u1F32", "\u1F33", "\u1F34", "\u1F35", "\u1F36", "\u1F37", "\u1F76", "\u1F77",
         "", "", "", "", "", "", "", "", "\u1FD0", "\u1FD1", "", "", "", "\u1FD6", "", "\u1FD2", "\u1FD3", "\u1FD7",
         "\u03CA", "\u03AF", "\u0390", ""],
    ["\u03BA", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", ""],
    ["\u03BB", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", ""],
    ["\u03BC", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", ""],
    ["\u03BD", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", ""],
    ["\u03BE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", ""],
    ["\u03BF", "\u1F40", "\u1F41", "\u1F42", "\u1F43", "\u1F44", "\u1F45", "", "", "\u1F78", "\u1F79", "", "",
         "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["\u03C0", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", ""],
    ["\u03C1", "\u1FE4", "\u1FE5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", "", "", "", ""],
    ["\u03C3", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", "\u03C2"],
    ["\u03C4", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", "", ""],
    ["\u03C5", "\u1F50", "\u1F51", "\u1F52", "\u1F53", "\u1F54", "\u1F55", "\u1F56", "\u1F57", "\u1F7A", "\u1F7B",
         "", "", "", "", "", "", "", "", "\u1FE0", "\u1FE1", "", "", "", "\u1FE6", "", "\u1FE2", "\u1FE3", "\u1FE7",
         "\u03CB", "\u03CD", "\u03B0", ""],
    ["\u03C6", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03C7", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03C8", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
         "", "", "", "", "", "", ""],
    ["\u03C9", "\u1F60", "\u1F61", "\u1F62", "\u1F63", "\u1F64", "\u1F65", "\u1F66", "\u1F67", "\u1F7C", "\u1F7D",
               "\u1FA0", "\u1FA1", "\u1FA2", "\u1FA3", "\u1FA4", "\u1FA5", "\u1FA6", "\u1FA7", "", "", "\u1FF2",
               "\u1FF3", "\u1FF4", "\u1FF6", "\u1FF7", "", "", "", "", "\u03CE", "", ""]];
  private static upperCaseLetters =
   [["\u0391", "\u1F08", "\u1F09", "\u1F0A", "\u1F0B", "\u1F0C", "\u1F0D", "\u1F0E", "\u1F0F", "\u1FBA", "\u1FBB",
        "\u1F88", "\u1F89", "\u1F8A", "\u1F8B", "\u1F8C", "\u1F8D", "\u1F8E", "\u1F8F", "\u1FB8", "\u1FB9", "",
        "\u1FBC", "", "", "", "", "", "", "", "", "", ""],
    ["\u0392", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", ""],
    ["\u0393", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", ""],
    ["\u0394", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", ""],
    ["\u0395", "\u1F18", "\u1F19", "\u1F1A", "\u1F1B", "\u1F1C", "\u1F1D", "", "", "\u1FC8", "\u1FC9", "", "", "",
               "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["\u0396", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", ""],
    ["\u0397", "\u1F28", "\u1F29", "\u1F2A", "\u1F2B", "\u1F2C", "\u1F2D", "\u1F2E", "\u1F2F", "\u1FCA", "\u1FCB",
               "\u1F98", "\u1F99", "\u1F9A", "\u1F9B", "\u1F9C", "\u1F9D", "\u1F9E", "\u1F9F", "", "", "", "\u1FCC",
               "", "", "", "", "", "", "", "", "", ""],
    ["\u0398", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", ""],
    ["\u0399", "\u1F38", "\u1F39", "\u1F3A", "\u1F3B", "\u1F3C", "\u1F3D", "\u1F3E", "\u1F3F", "\u1FDA", "\u1FDB",
               "", "", "", "", "", "", "", "", "\u1FD8", "\u1FD9", "", "", "", "", "", "", "", "", "\u03AA",
               "", "", ""],
    ["\u039A", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", ""],
    ["\u039B", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", ""],
    ["\u039C", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", ""],
    ["\u039D", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", ""],
    ["\u039E", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", ""],
    ["\u039F", "\u1F48", "\u1F49", "\u1F4A", "\u1F4B", "\u1F4C", "\u1F4D", "", "", "\u1FF8", "\u1FF9", "", "",
               "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["\u03A0", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", ""],
    ["\u03A1", "", "\u1FEC", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", "", "", ""],
    ["\u03A3", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", "", ""],
    ["\u03A4", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", "", ""],
    ["\u03A5", "", "\u1F59", "", "\u1F5B", "", "\u1F5D", "", "\u1F5F", "\u1FEA", "\u1FEB", "", "", "", "",
               "", "", "", "", "\u1FE8", "\u1FE9", "", "", "", "", "", "", "", "", "\u03AB", "", "", ""],
    ["\u03A6", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", "", ""],
    ["\u03A7", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", "", "", "", ""],
    ["\u03A8", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
               "", "", "", "", "", "", "", "", "", "", ""],
    ["\u03A9", "\u1F68", "\u1F69", "\u1F6A", "\u1F6B", "\u1F6C", "\u1F6D", "\u1F6E", "\u1F6F",
               "\u1FFA", "\u1FFB", "\u1FA8", "\u1FA9", "\u1FAA", "\u1FAB", "\u1FAC", "\u1FAD", "\u1FAE",
               "\u1FAF", "", "", "", "\u1FFC", "", "", "", "", "", "", "", "", "", ""]];

  private letter: EGreekLetter;
  private accents: GreekAccents;
  private upperCase: boolean = false;
  private errorHandling: EGreekLetterErrorHandling;
  private asUnicode: string;

  constructor(letter: EGreekLetter, accents?: IGreekAccents, upperCase?: boolean,
              errorHandling: EGreekLetterErrorHandling = EGreekLetterErrorHandling.ThrowException) {
    if (typeof (letter) === "number" && Number.isInteger(letter) &&
        letter >= EGreekLetter.Alpha && letter <= EGreekLetter.Omega) {
      this.letter = letter;
      this.accents = new GreekAccents(accents);
      this.upperCase = upperCase || false;
      this.errorHandling = errorHandling;
      this.asUnicode = this.checkAndGetUnicodeRepresentation();
    } else {
      throw RangeError(letter.toString());
    }
  }

  public toString() {
    return this.asUnicode;
  }

  private unicodeRepresentation(letter: EGreekLetter, accent: GreekAccents, upperCase: boolean): string {
    const accentIndex = this.accents._internalRepresentation();
    const mapIndex = GreekLetter.indexMap.get(accentIndex);
    if (mapIndex === undefined) {
      return "";
    } else {
      return upperCase ? GreekLetter.upperCaseLetters[letter][mapIndex] : GreekLetter.letters[letter][mapIndex];
    }
  }

  private checkAndGetUnicodeRepresentation(): string {
    let asUnicode = this.unicodeRepresentation(this.letter, this.accents, this.upperCase);
    if (asUnicode === "") {
      if (this.errorHandling === EGreekLetterErrorHandling.ThrowException) {
        const accentsAsString = "[" + this.accents.getAccents().map((x) => EGreekAccent[x]).join(", ") + "]";
        throw Error(`Illegal combination of letter (${EGreekLetter[this.letter]})` +
                    ` and accents ${accentsAsString}`);
      } else {
        this.accents = new GreekAccents();
        asUnicode = this.unicodeRepresentation(this.letter, this.accents, this.upperCase);
      }
    }
    return asUnicode;
  }
}
