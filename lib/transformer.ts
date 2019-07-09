import { SortedMap } from "immutable-sorted";
import { EGreekAccent } from "./accents";

export interface IGreekCharacterModifier {
  akut?: boolean;
  gravis?: boolean;
  spiritusAsper?: boolean;
  spiritusLenis?: boolean;
  circumflex?: boolean;
  iotaSubscriptum?: boolean;
  dialytika?: boolean;
  breve?: boolean;
  makron?: boolean;
  tonos?: boolean;
  endOfWord?: boolean;
}

export class GreekCharacterTransformer {
  private mModifiers: SortedMap<EGreekAccent, string>;

  constructor(modifiers?: IGreekCharacterModifier) {
    this.mModifiers = SortedMap<EGreekAccent, string>();
  }

  public transform(str: string): string {
    return "";
  }
}
