import { SortedMap } from "immutable-sorted";
import { EGreekAccent, EGreekAllowedAccentCombination, GreekAccents, IGreekAccents } from "./accents";

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

export interface IGreekLetter {
  letter: EGreekLetter;
  accents?: IGreekAccents;
  upperCase?: boolean;
}

export enum EGreekLetterErrorHandling {
  ThrowException = 0,
  ResetAccents   = 1,
}

export class GreekLetter {
  public static createFromString(str: string): Array<GreekLetter | undefined> {
    const result = new Array<GreekLetter | undefined>();
    for (const c of str) {
      const value = GreekLetter.reverseMap.get(c);
      if (value !== undefined) {
        const accent = new GreekAccents()._setInternalRepresentation(value[1]);
        result.push(new GreekLetter(value[0], accent, value[2]));
      } else {
        result.push(undefined);
      }
    }
    return result;
  }
  public static createFromRaw(letter: IGreekLetter,
                              errorHandling: EGreekLetterErrorHandling = EGreekLetterErrorHandling.ThrowException) {
    return new GreekLetter(letter.letter, new GreekAccents(letter.accents), letter.upperCase,
                           errorHandling);
  }

  public static create(letter: EGreekLetter, accents?: GreekAccents | undefined, upperCase?: boolean | undefined,
                       errorHandling: EGreekLetterErrorHandling = EGreekLetterErrorHandling.ThrowException) {
    return new GreekLetter(letter, accents, upperCase, errorHandling);
  }

  private static combinationToLetterMap: Array<[[EGreekLetter, EGreekAllowedAccentCombination, boolean], string]> =
[[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_None, false], "\u03b1"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_None, true], "\u0391"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Akut, false], "\u1f71"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Akut, true], "\u1fbb"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Gravis, false], "\u1f70"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Gravis, true], "\u1fba"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1f01"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1f09"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, false], "\u1f05"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, true], "\u1f0d"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, false], "\u1f03"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, true], "\u1f0b"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1f00"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusLenis, true], "\u1f08"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, false], "\u1f04"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, true], "\u1f0c"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, false], "\u1f02"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, true], "\u1f0a"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Circumflex, false], "\u1fb6"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, false], "\u1f07"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, true], "\u1f0f"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, false], "\u1f06"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, true], "\u1f0e"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_IotaSubscriptum, false], "\u1fb3"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_IotaSubscriptum, true], "\u1fbc"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutIotaSubscriptum, false], "\u1fb4"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisIotaSubscriptum, false], "\u1fb2"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusAsperIotaSubscriptum, false], "\u1f81"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusAsperIotaSubscriptum, true], "\u1f89"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsperIotaSubscriptum, false], "\u1f85"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsperIotaSubscriptum, true], "\u1f8d"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsperIotaSubscriptum, false], "\u1f83"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsperIotaSubscriptum, true], "\u1f8b"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusLenisIotaSubscriptum, false], "\u1f80"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusLenisIotaSubscriptum, true], "\u1f88"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenisIotaSubscriptum, false], "\u1f84"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenisIotaSubscriptum, true], "\u1f8c"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenisIotaSubscriptum, false], "\u1f82"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenisIotaSubscriptum, true], "\u1f8a"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_CircumflexIotaSubscriptum, false], "\u1fb7"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusAsperCircumflexIotaSubscriptum, false], "\u1f87"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusAsperCircumflexIotaSubscriptum, true], "\u1f8f"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusLenisCircumflexIotaSubscriptum, false], "\u1f86"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_SpiritusLenisCircumflexIotaSubscriptum, true], "\u1f8e"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Breve, false], "\u1fb0"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Breve, true], "\u1fb8"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Makron, false], "\u1fb1"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Makron, true], "\u1fb9"],
[[EGreekLetter.Alpha, EGreekAllowedAccentCombination.Comb_Tonos, false], "\u03ac"],
[[EGreekLetter.Beta, EGreekAllowedAccentCombination.Comb_None, false], "\u03b2"],
[[EGreekLetter.Beta, EGreekAllowedAccentCombination.Comb_None, true], "\u0392"],
[[EGreekLetter.Gamma, EGreekAllowedAccentCombination.Comb_None, false], "\u03b3"],
[[EGreekLetter.Gamma, EGreekAllowedAccentCombination.Comb_None, true], "\u0393"],
[[EGreekLetter.Delta, EGreekAllowedAccentCombination.Comb_None, false], "\u03b4"],
[[EGreekLetter.Delta, EGreekAllowedAccentCombination.Comb_None, true], "\u0394"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_None, false], "\u03b5"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_None, true], "\u0395"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_Akut, false], "\u1f73"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_Akut, true], "\u1fc9"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_Gravis, false], "\u1f72"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_Gravis, true], "\u1fc8"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1f11"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1f19"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, false], "\u1f15"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, true], "\u1f1d"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, false], "\u1f13"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, true], "\u1f1b"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1f10"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_SpiritusLenis, true], "\u1f18"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, false], "\u1f14"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, true], "\u1f1c"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, false], "\u1f12"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, true], "\u1f1a"],
[[EGreekLetter.Epsilon, EGreekAllowedAccentCombination.Comb_Tonos, false], "\u03ad"],
[[EGreekLetter.Zeta, EGreekAllowedAccentCombination.Comb_None, false], "\u03b6"],
[[EGreekLetter.Zeta, EGreekAllowedAccentCombination.Comb_None, true], "\u0396"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_None, false], "\u03b7"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_None, true], "\u0397"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_Akut, false], "\u1f75"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_Akut, true], "\u1fcb"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_Gravis, false], "\u1f74"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_Gravis, true], "\u1fca"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1f21"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1f29"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, false], "\u1f25"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, true], "\u1f2d"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, false], "\u1f23"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, true], "\u1f2b"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1f20"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusLenis, true], "\u1f28"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, false], "\u1f24"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, true], "\u1f2c"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, false], "\u1f22"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, true], "\u1f2a"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_Circumflex, false], "\u1fc6"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, false], "\u1f27"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, true], "\u1f2f"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, false], "\u1f26"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, true], "\u1f2e"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_IotaSubscriptum, false], "\u1fc3"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_IotaSubscriptum, true], "\u1fcc"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutIotaSubscriptum, false], "\u1fc4"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisIotaSubscriptum, false], "\u1fc2"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusAsperIotaSubscriptum, false], "\u1f91"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusAsperIotaSubscriptum, true], "\u1f99"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsperIotaSubscriptum, false], "\u1f95"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsperIotaSubscriptum, true], "\u1f9d"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsperIotaSubscriptum, false], "\u1f93"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsperIotaSubscriptum, true], "\u1f9b"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusLenisIotaSubscriptum, false], "\u1f90"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusLenisIotaSubscriptum, true], "\u1f98"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenisIotaSubscriptum, false], "\u1f94"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenisIotaSubscriptum, true], "\u1f9c"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenisIotaSubscriptum, false], "\u1f92"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenisIotaSubscriptum, true], "\u1f9a"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_CircumflexIotaSubscriptum, false], "\u1fc7"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusAsperCircumflexIotaSubscriptum, false], "\u1f97"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusAsperCircumflexIotaSubscriptum, true], "\u1f9f"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusLenisCircumflexIotaSubscriptum, false], "\u1f96"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_SpiritusLenisCircumflexIotaSubscriptum, true], "\u1f9e"],
[[EGreekLetter.Eta, EGreekAllowedAccentCombination.Comb_Tonos, false], "\u03ae"],
[[EGreekLetter.Theta, EGreekAllowedAccentCombination.Comb_None, false], "\u03b8"],
[[EGreekLetter.Theta, EGreekAllowedAccentCombination.Comb_None, true], "\u0398"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_None, false], "\u03b9"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_None, true], "\u0399"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Akut, false], "\u1f77"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Akut, true], "\u1fdb"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Gravis, false], "\u1f76"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Gravis, true], "\u1fda"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1f31"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1f39"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, false], "\u1f35"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, true], "\u1f3d"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, false], "\u1f33"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, true], "\u1f3b"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1f30"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_SpiritusLenis, true], "\u1f38"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, false], "\u1f34"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, true], "\u1f3c"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, false], "\u1f32"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, true], "\u1f3a"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Circumflex, false], "\u1fd6"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, false], "\u1f37"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, true], "\u1f3f"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, false], "\u1f36"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, true], "\u1f3e"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Dialytika, false], "\u03ca"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Dialytika, true], "\u03aa"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_AkutDialytika, false], "\u1fd3"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_GravisDialytika, false], "\u1fd2"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_CircumflexDialytika, false], "\u1fd7"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Breve, false], "\u1fd0"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Breve, true], "\u1fd8"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Makron, false], "\u1fd1"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Makron, true], "\u1fd9"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_Tonos, false], "\u03af"],
[[EGreekLetter.Iota, EGreekAllowedAccentCombination.Comb_DialytikaTonos, false], "\u0390"],
[[EGreekLetter.Kappa, EGreekAllowedAccentCombination.Comb_None, false], "\u03ba"],
[[EGreekLetter.Kappa, EGreekAllowedAccentCombination.Comb_None, true], "\u039a"],
[[EGreekLetter.Lambda, EGreekAllowedAccentCombination.Comb_None, false], "\u03bb"],
[[EGreekLetter.Lambda, EGreekAllowedAccentCombination.Comb_None, true], "\u039b"],
[[EGreekLetter.Mu, EGreekAllowedAccentCombination.Comb_None, false], "\u03bc"],
[[EGreekLetter.Mu, EGreekAllowedAccentCombination.Comb_None, true], "\u039c"],
[[EGreekLetter.Nu, EGreekAllowedAccentCombination.Comb_None, false], "\u03bd"],
[[EGreekLetter.Nu, EGreekAllowedAccentCombination.Comb_None, true], "\u039d"],
[[EGreekLetter.Xi, EGreekAllowedAccentCombination.Comb_None, false], "\u03be"],
[[EGreekLetter.Xi, EGreekAllowedAccentCombination.Comb_None, true], "\u039e"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_None, false], "\u03bf"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_None, true], "\u039f"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_Akut, false], "\u1f79"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_Akut, true], "\u1ff9"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_Gravis, false], "\u1f78"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_Gravis, true], "\u1ff8"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1f41"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1f49"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, false], "\u1f45"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, true], "\u1f4d"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, false], "\u1f43"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, true], "\u1f4b"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1f40"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_SpiritusLenis, true], "\u1f48"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, false], "\u1f44"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, true], "\u1f4c"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, false], "\u1f42"],
[[EGreekLetter.Omicron, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, true], "\u1f4a"],
[[EGreekLetter.Pi, EGreekAllowedAccentCombination.Comb_None, false], "\u03c0"],
[[EGreekLetter.Pi, EGreekAllowedAccentCombination.Comb_None, true], "\u03a0"],
[[EGreekLetter.Rho, EGreekAllowedAccentCombination.Comb_None, false], "\u03c1"],
[[EGreekLetter.Rho, EGreekAllowedAccentCombination.Comb_None, true], "\u03a1"],
[[EGreekLetter.Rho, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1fe5"],
[[EGreekLetter.Rho, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1fec"],
[[EGreekLetter.Rho, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1fe4"],
[[EGreekLetter.Sigma, EGreekAllowedAccentCombination.Comb_None, false], "\u03c3"],
[[EGreekLetter.Sigma, EGreekAllowedAccentCombination.Comb_None, true], "\u03a3"],
[[EGreekLetter.Sigma, EGreekAllowedAccentCombination.Comb_EndOfWord, false], "\u03c2"],
[[EGreekLetter.Tau, EGreekAllowedAccentCombination.Comb_None, false], "\u03c4"],
[[EGreekLetter.Tau, EGreekAllowedAccentCombination.Comb_None, true], "\u03a4"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_None, false], "\u03c5"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_None, true], "\u03a5"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Akut, false], "\u1f7b"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Akut, true], "\u1feb"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Gravis, false], "\u1f7a"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Gravis, true], "\u1fea"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1f51"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1f59"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, false], "\u1f55"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, true], "\u1f5d"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, false], "\u1f53"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, true], "\u1f5b"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1f50"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, false], "\u1f54"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, false], "\u1f52"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Circumflex, false], "\u1fe6"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, false], "\u1f57"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, true], "\u1f5f"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, false], "\u1f56"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Dialytika, false], "\u03cb"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Dialytika, true], "\u03ab"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_AkutDialytika, false], "\u1fe3"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_GravisDialytika, false], "\u1fe2"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_CircumflexDialytika, false], "\u1fe7"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Breve, false], "\u1fe0"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Breve, true], "\u1fe8"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Makron, false], "\u1fe1"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Makron, true], "\u1fe9"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_Tonos, false], "\u03cd"],
[[EGreekLetter.Upsilon, EGreekAllowedAccentCombination.Comb_DialytikaTonos, false], "\u03b0"],
[[EGreekLetter.Phi, EGreekAllowedAccentCombination.Comb_None, false], "\u03c6"],
[[EGreekLetter.Phi, EGreekAllowedAccentCombination.Comb_None, true], "\u03a6"],
[[EGreekLetter.Chi, EGreekAllowedAccentCombination.Comb_None, false], "\u03c7"],
[[EGreekLetter.Chi, EGreekAllowedAccentCombination.Comb_None, true], "\u03a7"],
[[EGreekLetter.Psi, EGreekAllowedAccentCombination.Comb_None, false], "\u03c8"],
[[EGreekLetter.Psi, EGreekAllowedAccentCombination.Comb_None, true], "\u03a8"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_None, false], "\u03c9"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_None, true], "\u03a9"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_Akut, false], "\u1f7d"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_Akut, true], "\u1ffb"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_Gravis, false], "\u1f7c"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_Gravis, true], "\u1ffa"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusAsper, false], "\u1f61"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusAsper, true], "\u1f69"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, false], "\u1f65"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsper, true], "\u1f6d"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, false], "\u1f63"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsper, true], "\u1f6b"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusLenis, false], "\u1f60"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusLenis, true], "\u1f68"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, false], "\u1f64"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenis, true], "\u1f6c"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, false], "\u1f62"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenis, true], "\u1f6a"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_Circumflex, false], "\u1ff6"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, false], "\u1f67"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusAsper, true], "\u1f6f"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, false], "\u1f66"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_CircumflexSpiritusLenis, true], "\u1f6e"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_IotaSubscriptum, false], "\u1ff3"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_IotaSubscriptum, true], "\u1ffc"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutIotaSubscriptum, false], "\u1ff4"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisIotaSubscriptum, false], "\u1ff2"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusAsperIotaSubscriptum, false], "\u1fa1"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusAsperIotaSubscriptum, true], "\u1fa9"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsperIotaSubscriptum, false], "\u1fa5"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusAsperIotaSubscriptum, true], "\u1fad"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsperIotaSubscriptum, false], "\u1fa3"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusAsperIotaSubscriptum, true], "\u1fab"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusLenisIotaSubscriptum, false], "\u1fa0"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusLenisIotaSubscriptum, true], "\u1fa8"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenisIotaSubscriptum, false], "\u1fa4"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_AkutSpiritusLenisIotaSubscriptum, true], "\u1fac"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenisIotaSubscriptum, false], "\u1fa2"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_GravisSpiritusLenisIotaSubscriptum, true], "\u1faa"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_CircumflexIotaSubscriptum, false], "\u1ff7"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusAsperCircumflexIotaSubscriptum, false], "\u1fa7"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusAsperCircumflexIotaSubscriptum, true], "\u1faf"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusLenisCircumflexIotaSubscriptum, false], "\u1fa6"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_SpiritusLenisCircumflexIotaSubscriptum, true], "\u1fae"],
[[EGreekLetter.Omega, EGreekAllowedAccentCombination.Comb_Tonos, false], "\u03ce"]];
  private static sortedMap: SortedMap<[EGreekLetter, EGreekAllowedAccentCombination, boolean], string> =
     SortedMap(GreekLetter.combinationToLetterMap);
  private static reverseMap: SortedMap<string, [EGreekLetter, EGreekAllowedAccentCombination, boolean]> =
     SortedMap(GreekLetter.combinationToLetterMap.map(
          (x) => x.reverse() as [string, [EGreekLetter, EGreekAllowedAccentCombination, boolean]]));

  private mAccents: GreekAccents;
  private mLetter: EGreekLetter;
  private mUpperCase: boolean = false;
  private mAsUnicode: string;

  private constructor(letter: EGreekLetter, accents?: GreekAccents | undefined, upperCase?: boolean | undefined,
                      errorHandling: EGreekLetterErrorHandling = EGreekLetterErrorHandling.ThrowException) {
    if (typeof (letter) === "number" && Number.isInteger(letter) &&
        letter >= EGreekLetter.Alpha && letter <= EGreekLetter.Omega) {
      this.mLetter = letter;
      this.mAccents = accents ? accents.clone() : new GreekAccents();
      this.mUpperCase = upperCase || false;
      this.mAsUnicode = this.checkAndGetUnicodeRepresentation(errorHandling);
    } else {
      throw RangeError(letter.toString());
    }
  }

  public toString(): string {
    return this.mAsUnicode;
  }

  public clone(): GreekLetter {
    return new GreekLetter(this.mLetter, this.mAccents, this.mUpperCase);
  }

  public akut(): boolean { return this.mAccents.akut(); }
  public gravis(): boolean { return this.mAccents.gravis(); }
  public spiritusAsper(): boolean { return this.mAccents.spiritusAsper(); }
  public spiritusLenis(): boolean { return this.mAccents.spiritusLenis(); }
  public circumflex(): boolean { return this.mAccents.circumflex(); }
  public iotaSubscriptum(): boolean { return this.mAccents.iotaSubscriptum(); }
  public dialytika(): boolean { return this.mAccents.dialytika(); }
  public breve(): boolean { return this.mAccents.breve(); }
  public makron(): boolean { return this.mAccents.makron(); }
  public tonos(): boolean { return this.mAccents.tonos(); }
  public endOfWord(): boolean { return this.mAccents.endOfWord(); }

  public setAkut(value: boolean = true,
                 errorHandling: EGreekLetterErrorHandling = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setAkut, errorHandling);
  }

  public setGravis(value: boolean = true,
                   errorHandling: EGreekLetterErrorHandling = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setGravis, errorHandling);
  }

  public setSpiritusAsper(value: boolean = true,
                          errorHandling: EGreekLetterErrorHandling
                            = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setSpiritusAsper, errorHandling);
  }

  public setSpiritusLenis(value: boolean = true,
                          errorHandling: EGreekLetterErrorHandling
                            = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setSpiritusLenis, errorHandling);
  }

  public setCircumflex(value: boolean = true,
                       errorHandling: EGreekLetterErrorHandling
                            = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setCircumflex, errorHandling);
  }

  public setIotaSubscriptum(value: boolean = true,
                            errorHandling: EGreekLetterErrorHandling
                              = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setIotaSubscriptum, errorHandling);
  }

  public setDialytica(value: boolean = true,
                      errorHandling: EGreekLetterErrorHandling
                              = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setDialytika, errorHandling);
  }

  public setBreve(value: boolean = true,
                  errorHandling: EGreekLetterErrorHandling
                              = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setBreve, errorHandling);
  }

  public setMakron(value: boolean = true,
                   errorHandling: EGreekLetterErrorHandling
                              = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setMakron, errorHandling);
  }

  public setTonos(value: boolean = true,
                  errorHandling: EGreekLetterErrorHandling
                              = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setTonos, errorHandling);
  }

  public setEndOfWord(value: boolean = true,
                      errorHandling: EGreekLetterErrorHandling
                              = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(value, this.mAccents.setEndOfWord, errorHandling);
  }

  public combination(): EGreekAllowedAccentCombination {
    return this.mAccents._internalRepresentation();
  }

  public setCombination(combination: EGreekAllowedAccentCombination,
                        errorHandling: EGreekLetterErrorHandling
                           = EGreekLetterErrorHandling.ThrowException): GreekLetter {
    return this.setMethod(combination, this.mAccents._setInternalRepresentation, errorHandling);
  }

  public letter(): EGreekLetter {
    return this.mLetter;
  }

  public upperCase(): boolean {
    return this.mUpperCase;
  }

  public expand(): IGreekLetter {
    return {
      accents: this.mAccents.expand(),
      letter: this.letter(),
      upperCase: this.mUpperCase,
    };
  }
  /** @internal */
  private setMethod<T>(value: T, method: (value: T) => any,
                       errorHandling: EGreekLetterErrorHandling): GreekLetter {
    if (errorHandling === EGreekLetterErrorHandling.ResetAccents) {
      method(value);
      this.mAsUnicode = this.checkAndGetUnicodeRepresentation(EGreekLetterErrorHandling.ResetAccents);
    } else {
      const savedAccents = this.mAccents.clone();
      method(value);
      try {
        this.mAsUnicode = this.checkAndGetUnicodeRepresentation(EGreekLetterErrorHandling.ThrowException);
      } catch (error) {
        this.mAccents = savedAccents;
        throw error;
      }
    }
    return this;
  }
  /** @internal */
  private unicodeRepresentation(letter: EGreekLetter, accent: GreekAccents, upperCase: boolean): string | undefined {
    const accentIndex = this.mAccents._internalRepresentation();
    return GreekLetter.sortedMap.get([letter, accentIndex, upperCase]);
  }
  /** @internal */
  private checkAndGetUnicodeRepresentation(errorHandling: EGreekLetterErrorHandling): string {
    let asUnicode = this.unicodeRepresentation(this.mLetter, this.mAccents, this.mUpperCase);
    if (asUnicode === undefined) {
      if (errorHandling === EGreekLetterErrorHandling.ThrowException) {
        const accentsAsString = "[" + this.mAccents.getAccents().map((x) => EGreekAccent[x]).join(", ") + "]";
        throw Error(`Illegal combination of letter (${EGreekLetter[this.mLetter]})` +
                    ` and accents ${accentsAsString}`);
      } else {
        this.mAccents = new GreekAccents();
        asUnicode = this.unicodeRepresentation(this.mLetter, this.mAccents, this.mUpperCase);
      }
    }
    return asUnicode as string;
  }
}
