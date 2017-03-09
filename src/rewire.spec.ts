import {expect} from 'chai';
import * as sinon from "sinon";
const indexInjector = require('inject-loader!./rewire');

const testMock = {
  count: 100,
  increment: sinon.spy(),
  decrement: () => {
    console.log('mockDecrement');
  }
};

describe('test rewire', () => {
  let index;
  beforeEach(() => {
    index = indexInjector({'./lib/lib': testMock});
  });
  it('we are changing the lib', () => {
    let returnVal = index.doWhile();
    expect(returnVal).to.eq(100);
    expect(testMock.increment.callCount).to.eq(1);
  });
});
