import { expect } from "chai";
import { GreekAccents, GreekLetter, IGreekAccents } from "../lib";

describe("GreekLetterTest", () => {
  it("constructorThrows", () => {
    expect(() => new GreekLetter(-1)).to.throw(RangeError);
    expect(() => new GreekLetter(24)).to.throw(RangeError);
  });
});
