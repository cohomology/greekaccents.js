import { expect } from "chai";
import { GreekAccents, IGreekAccents } from "../lib";

describe("GreekAccentsTest", () => {
  it("can be constructed", () => {
    const accent = new GreekAccents();
    for (const prop of Object.keys(accent)) {
      const value = Reflect.get(accent, prop);
      expect(typeof(value)).eql("boolean");
      expect(value).eql(false);
    }
  });
  it("check constructor", () => {
    const proto = new GreekAccents();
    const propertyArray: string[] = [];
    Object.keys(proto).forEach( (key) => {
      propertyArray.push(key);
    });
    propertyArray.forEach((item, _) => {
      const hasExactlyOneProperty = {};
      Reflect.set(hasExactlyOneProperty, item, true);
      const hasProp: IGreekAccents =  (hasExactlyOneProperty) as any;
      const accent = new GreekAccents(hasProp);
      for (const prop of Object.keys(accent)) {
        const value = Reflect.get(accent, prop);
        expect(typeof(value)).eql("boolean");
        expect(value).eql(item === prop);
      }
    });
  });
});
