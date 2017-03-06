/**
 *  DI-DEMO
 *
 * 
 * @module DI-demo
 * @license MIT
 */

import * as counter from './lib/lib';

export default function somethingElse() {
  if (counter.count > 100) {
    return 'more';
  } else {
    return 'less';
  }
}

export function doWhile() {
  do {
    counter.increment();
  } while (counter.count < 100);
  return counter.count;
}
