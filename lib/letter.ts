import { GreekAccents, IGreekAccents } from "./accents";

export class GreekLetter {
  public letter: number;
  public accents: GreekAccents;
  public upperCase: boolean = false;

  constructor(letter: number, accents?: IGreekAccents, upperCase?: boolean) {
    if (letter >= 1 && letter <= 24) {
      this.letter = letter;
      this.accents = new GreekAccents(accents);
      this.upperCase = upperCase || false;
    } else {
      throw RangeError(letter.toString());
    }
  }
}
