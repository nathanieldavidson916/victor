/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import setX from '../../src/lib/setX';

describe('lib/setX()', () => {
  it('should set the X component of the vector', () => {
    const v1 = { x: 100, y: 50 };

    const res = setX(v1, 42);
    assert.equal(res.x, 42);
    assert.equal(res.y, 50);
  });
});
