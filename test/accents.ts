import { expect } from 'chai';
import { IGreekAccents, GreekAccents } from '../lib';

describe('GreekAccentsTest', () => {
  it('can be constructed', () => {
    let accent = new GreekAccents();
    for (let attr in accent) {
      expect(typeof attr === 'boolean');
    }
  });
})


