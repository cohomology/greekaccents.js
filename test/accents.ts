import { expect } from 'chai';
import { GreekAccents } from '../lib';

describe('GreekAccents', () => {
  it('can be constructed', () => {
    let accent = new GreekAccents();
    expect(accent.makron === false);
  });
})


