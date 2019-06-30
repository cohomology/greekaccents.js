import { expect } from "chai";
import { GreekAccents, GreekLetter, IGreekAccents } from "../lib";

describe("GreekLetterTest", () => {
  it("constructor", () => {
    expect(() => new GreekLetter(0)).to.throw(RangeError);
    expect(() => new GreekLetter(25)).to.throw(RangeError);
  });
});
