import { expect } from "chai";
import { GreekAccents, IGreekAccents } from "../lib";

describe("GreekAccentsTest", () => {
  it("can be constructed", () => {
    const accent = new GreekAccents();
    Object.getOwnPropertyNames(GreekAccents.prototype).forEach( (name) => {
      if (name !== "constructor" && name.charAt(0) !== "_") {
        const value = (accent as any)[name]();
        expect(typeof(value)).eql("boolean");
        expect(value).eql(false);
      }
    });
    expect(accent._internalRepresentation()).eql(0);
  });
  it("check constructor", () => {
    const propertyArray: string[] = [];
    Object.getOwnPropertyNames(GreekAccents.prototype).forEach( (name) => {
      if (name !== "constructor" && name.charAt(0) !== "_") {
        propertyArray.push(name);
      }
    });
    propertyArray.forEach((name, _) => {
      const hasExactlyOneProperty = {};
      Reflect.set(hasExactlyOneProperty, name, true);
      const hasProp: IGreekAccents =  (hasExactlyOneProperty) as any;
      const accent = new GreekAccents(hasProp);
      propertyArray.forEach((toBeTestedName,_) => {
        const value = (accent as any)[toBeTestedName]();
        expect(typeof(value)).eql("boolean");
        expect(value).eql(name === toBeTestedName);
      });
    });
  });
});
