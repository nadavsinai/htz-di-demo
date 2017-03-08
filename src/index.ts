import * as diApp from './diApp';
import {WindowToken} from './shop/general.types';
let injector = diApp.runShop();
let theWindow: Window = injector.get(WindowToken);
theWindow['clearShop'] = function () {
  theWindow.localStorage.clear();
}
