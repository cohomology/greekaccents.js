import { expect } from 'chai';
import { IGreekAccents, GreekAccents } from '../lib';

describe('GreekAccentsTest', () => {
  it('can be constructed', () => {
    let accent = new GreekAccents();
    for(let prop in accent) {
      let value = Reflect.get(accent, prop);
      expect(typeof(value)).eql('boolean');
      expect(value).eql(false);
    }
  });
  it('check constructor', () => {
    const proto = new GreekAccents();
    let propertyArray : string[] = [];
    Object.keys(proto).forEach( key => {
      propertyArray.push(key);
    });
    propertyArray.forEach((item,index) => {
      let hasExactlyOneProperty = {};
      Reflect.set(hasExactlyOneProperty, item, true);
      let hasProp : IGreekAccents = <any>(hasExactlyOneProperty);
      let accent = new GreekAccents(hasProp);
      for(let prop in accent) {
        let value = Reflect.get(accent, prop);
        expect(typeof(value)).eql('boolean');
        expect(value).eql(item === prop);
      } 
    });
  }); 
})


