import { assert, expect } from "chai";
import { EGreekLetter, EGreekLetterErrorHandling, GreekAccents, GreekLetter, IGreekAccents } from "../lib";

describe("GreekLetterTest", () => {
  it("constructorThrows", () => {
    expect(() => new GreekLetter(-1)).to.throw(RangeError);
    expect(() => new GreekLetter(24)).to.throw(RangeError);
  });
  it("basicAccentTest", () => {
    const letter = new GreekLetter(EGreekLetter.Alpha, { akut: true }, false);
    expect(letter.toString()).eql("ά");
  });
  it("constructorThrowsWrongAccent", () => {
    expect(() => new GreekLetter(EGreekLetter.Beta, { akut: true, makron: true }, false)).to.throw(
      "Illegal combination of letter (Beta) and accents [Akut, Makron]");
  });
  it("constructorNoThrowDueToStrategy", () => {
    const letter = new GreekLetter(EGreekLetter.Beta, { akut: true, makron: true }, false,
      EGreekLetterErrorHandling.ResetAccents);
    expect(letter.toString()).eql("β");
  });
});
