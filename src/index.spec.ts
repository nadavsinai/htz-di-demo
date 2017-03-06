import { expect } from 'chai';
import indexInjector from 'inject-loader!./index';

const testMock = {
  count: 100,
  increment: () => {
    console.log('mockIncrement');
  },
  decrement: () => {
    console.log('mockDecrement');
  }
};

describe('test rewire', () => {
  let index;
  beforeEach(() => {
    index = indexInjector( { './lib/lib': testMock } );
  });
  it('we are changing the lib', () => {
    index.doWhile();
    expect(true).to.be.true;
  });
});
