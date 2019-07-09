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
  it("simpleFromString", () => {
    const str = "Kτραγῳδία+";
    const arr = GreekLetter.fromString(str);
    const expected: Array<GreekLetter | undefined> = [ undefined, 
      new GreekLetter(EGreekLetter.Tau),
      new GreekLetter(EGreekLetter.Rho),
      new GreekLetter(EGreekLetter.Alpha),
      new GreekLetter(EGreekLetter.Gamma),
      new GreekLetter(EGreekLetter.Omega, new GreekAccents({ iotaSubscriptum: true })),
      new GreekLetter(EGreekLetter.Delta),
      new GreekLetter(EGreekLetter.Iota, new GreekAccents({ tonos: true })),
      new GreekLetter(EGreekLetter.Alpha),
      undefined ];
    expect(arr).eql(expected);
  });
})
