import { EGreekAccent, GreekAccents, IGreekAccents } from "./accents";

export class GreekLetter {
  private static indexMap: { [index: number]: number }  = { 0: 0, 16: 1, 8: 2, 20: 3, 12: 4, 18: 5, 10: 6, 48: 7,
                                                   40: 8, 4: 9, 2: 10, 80: 11, 72: 12, 84: 13, 76: 14, 82: 15,
                                                   74: 16, 112: 17, 104: 18, 256: 19, 512: 20, 68: 21, 64: 22, 66: 23,
                                                   32: 24, 96: 25, 132: 26, 130: 27, 160: 28, 128: 29, 1024: 30,
                                                   1152: 31, 2048: 32 };
  private letter: number;
  private accents: GreekAccents;
  private upperCase: boolean = false;

  constructor(letter: number, accents?: IGreekAccents, upperCase?: boolean) {
    if (Number.isInteger(letter) && letter >= 1 && letter <= 24) {
      this.letter = letter;
      this.accents = new GreekAccents(accents);
      this.upperCase = upperCase || false;
    } else {
      throw RangeError(letter.toString());
    }
  }

  private isValid(letter: number, accent: GreekAccents, upperCase: boolean): boolean {
    const accentIndex = this.accents._internalRepresentation();
    if (!GreekLetter.indexMap.hasOwnProperty(accentIndex)) {
      return false;
    }
    const lookupIndex = GreekLetter.indexMap[accentIndex];
    return true;
  }
}
