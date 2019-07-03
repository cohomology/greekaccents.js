import { expect } from "chai";
import { GreekAccents, GreekLetter, IGreekAccents } from "../lib";

describe("GreekLetterTest", () => {
  it("constructorThrows", () => {
    expect(() => new GreekLetter(0)).to.throw(RangeError);
    expect(() => new GreekLetter(25)).to.throw(RangeError);
  });
});
