import { assert, expect } from "chai";
import { EGreekLetter, EGreekLetterErrorHandling, GreekAccents, GreekLetter, IGreekAccents } from "../lib";

describe("GreekLetterTest", () => {
  it("constructorThrows", () => {
    expect(() => GreekLetter.create(-1)).to.throw(RangeError);
    expect(() => GreekLetter.create(24)).to.throw(RangeError);
  });
  it("basicAccentTest", () => {
    const letter = GreekLetter.create(EGreekLetter.Alpha, new GreekAccents({ akut: true }), false);
    expect(letter.toString()).eql("ά");
  });
  it("constructorThrowsWrongAccent", () => {
    expect(() => GreekLetter.create(EGreekLetter.Beta, new GreekAccents({ akut: true, makron: true }), false)).to.throw(
      "Illegal combination of letter (Beta) and accents [Akut, Makron]");
  });
  it("constructorNoThrowDueToStrategy", () => {
    const letter = GreekLetter.create(EGreekLetter.Beta, new GreekAccents({ akut: true, makron: true }), false,
      EGreekLetterErrorHandling.ResetAccents);
    expect(letter.toString()).eql("β");
  });
  it("simpleFromString", () => {
    const str = "Kτραγῳδία+";
    const arr = GreekLetter.createFromString(str);
    const expected: Array<GreekLetter | undefined> = [ undefined,
      GreekLetter.create(EGreekLetter.Tau),
      GreekLetter.create(EGreekLetter.Rho),
      GreekLetter.create(EGreekLetter.Alpha),
      GreekLetter.create(EGreekLetter.Gamma),
      GreekLetter.create(EGreekLetter.Omega, new GreekAccents({ iotaSubscriptum: true })),
      GreekLetter.create(EGreekLetter.Delta),
      GreekLetter.create(EGreekLetter.Iota, new GreekAccents({ tonos: true })),
      GreekLetter.create(EGreekLetter.Alpha),
      undefined ];
    expect(arr).eql(expected);
  });
});
