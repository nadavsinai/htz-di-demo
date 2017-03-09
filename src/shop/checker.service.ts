import {Inject, Injectable} from 'injection-js';
import {IItem} from './items.types';
import {WindowToken,WindowType} from './general.types';

@Injectable()
export class CheckerService {
  constructor(@Inject(WindowToken) private window: WindowType) {

  }
  check(item: IItem) {
    if (this.window.localStorage.getItem(item.name) !== 'checked') {
      console.log('checking item.... doing some horrible side-effect');
      let passed: boolean = ( Math.random() * 100 > 50);
      if (passed) {
        this.window.localStorage.setItem(item.name, 'checked');
      }
      return passed;
    }
    return true;
  }
}
