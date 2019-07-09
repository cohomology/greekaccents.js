import { assert, expect } from "chai";
import { EGreekLetter, EGreekLetterErrorHandling, GreekAccents, GreekLetter, IGreekAccents } from "../lib";

describe("GreekLetterTest", () => {
  it("constructorThrows", () => {
    expect(() => new GreekLetter(-1)).to.throw(RangeError);
    expect(() => new GreekLetter(24)).to.throw(RangeError);
  });
  it("basicAccentTest", () => {
    const letter = new GreekLetter(EGreekLetter.Alpha, new GreekAccents({ akut: true }), false);
    expect(letter.toString()).eql("ά");
  });
  it("constructorThrowsWrongAccent", () => {
    expect(() => new GreekLetter(EGreekLetter.Beta, new GreekAccents({ akut: true, makron: true }), false)).to.throw(
      "Illegal combination of letter (Beta) and accents [Akut, Makron]");
  });
  it("constructorNoThrowDueToStrategy", () => {
    const letter = new GreekLetter(EGreekLetter.Beta, new GreekAccents({ akut: true, makron: true }), false,
      EGreekLetterErrorHandling.ResetAccents);
    expect(letter.toString()).eql("β");
  });
  // it("finalJson", () => {
  //   Object.keys(EGreekLetter).filter((letter) => isNaN(Number(letter))).forEach((letter) => {
  //     Object.keys(EGreekAllowedAccentCombination).filter((comb) => isNaN(Number(comb))).forEach((comb) => {
  //       for (let i = 0; i < 2 ; ++i) {
  //         let er = false;
  //         const greekLetter = new GreekLetter(EGreekLetter[letter as any] as any);
  //         greekLetter.accents.accents = EGreekAllowedAccentCombination[comb as any] as any;
  //         greekLetter.upperCase = i === 0 ? false : true;
  //         try {
  //           greekLetter.asUnicode = greekLetter.checkAndGetUnicodeRepresentation();
  //         } catch (error) {
  //           er = true;
  //         }
  //         if (!er) {
  //           let hex = "0000";
  //           if (greekLetter.asUnicode) {
  //             hex = (greekLetter.asUnicode.codePointAt(0) as any).toString(16);
  //           }
  //           const code = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
  //           console.log(`[ [ EGreekLetter.${letter}, EGreekAllowedAccentCombination.${comb}, ` +
  //                       `${greekLetter.upperCase}], "${code}" ],`);
  //         }
  //       }
  //     });
  //   });
  // });
})
