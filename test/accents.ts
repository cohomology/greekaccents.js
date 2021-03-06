/* tslint:disable:no-bitwise */

import { expect } from "chai";
import { EGreekAccent, EGreekAllowedAccentCombination, GreekAccents, GreekLetter, IGreekAccents } from "../lib";

describe("GreekAccentsTest", () => {
  it("can be constructed", () => {
    const accent = new GreekAccents();
    Object.getOwnPropertyNames(GreekAccents.prototype).forEach( (name) => {
      if (name !== "constructor" && name !== "getAccents" && name !== "expand" && name !== "clone" &&
          name.charAt(0) !== "_" && name.substring(0, 3) !== "set") {
        const value = (accent as any)[name]();
        expect(typeof(value)).eql("boolean");
        expect(value).eql(false);
      }
    });
    expect(accent._internalRepresentation()).eql(0);
  });
  it("check constructor/set/get", () => {
    const propertyArray: string[] = [];
    Object.getOwnPropertyNames(GreekAccents.prototype).forEach( (name, index) => {
      if (name !== "constructor" && name !== "getAccents" && name !== "expand" && name !== "clone" &&
          name.charAt(0) !== "_" && name.substring(0, 3) !== "set") {
        propertyArray.push(name);
      }
    });
    propertyArray.forEach( (name, index) => {
      const hasExactlyOneProperty = {};
      Reflect.set(hasExactlyOneProperty, name, true);
      const hasProp: IGreekAccents = hasExactlyOneProperty as any;
      const accent = new GreekAccents(hasProp);
      expect(accent._internalRepresentation()).eql(1 << index);
      const otherAccent = new GreekAccents();
      (otherAccent as any)["set" + name.substring(0, 1).toUpperCase() + name.substring(1)](true);
      expect(otherAccent._internalRepresentation()).eql(1 << index);
      (otherAccent as any)["set" + name.substring(0, 1).toUpperCase() + name.substring(1)](false);
      expect(otherAccent._internalRepresentation()).eql(0);
      propertyArray.forEach( (toBeTestedName) => {
        const value = (accent as any)[toBeTestedName]();
        expect(typeof(value)).eql("boolean");
        expect(value).eql(name === toBeTestedName);
      });
    });
  });
  it("check getAccents()", () => {
    const accents = new GreekAccents({akut: true, makron: true});
    const accentList = accents.getAccents().map((x) => EGreekAccent[x]);
    expect(accentList).eql(["Akut", "Makron"]);
  });
});
