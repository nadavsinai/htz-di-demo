import 'reflect-metadata';
import {ReflectiveInjector} from 'injection-js';
import {ShopInventoryService} from './shop/shop-inventory.service';
import {CheckerService} from './shop/checker.service';
import {appConfig, DisplayItems, Fetch, InitialItems, WindowToken} from './shop/general.types';
import {getConfig} from './shop/config.getter';
import {BuzzLightYear, IItem, PowerRanger} from './shop/items.types';

const initiaItem: IItem = new PowerRanger();

export function runShop() {
  let injector = ReflectiveInjector.resolveAndCreate([
    {provide: ShopInventoryService, useClass: ShopInventoryService},
    CheckerService,
    {provide: Fetch, useValue: {fetch: window.fetch}},
    {provide: appConfig, useFactory: getConfig, deps: [Fetch]},
    {provide: WindowToken, useValue: window},
    {provide: InitialItems, useValue: initiaItem},
    {provide: DisplayItems, useExisting: InitialItems, multi: true}
  ]);

  console.log('instantiating app....');
  let shopInventory: ShopInventoryService = injector.get(ShopInventoryService);
  let displayItems = injector.get(DisplayItems);
  console.log(displayItems);
  displayItems.forEach((i) => shopInventory.add(i));
  console.log(shopInventory.report());
/// doing some ajax... to api
  setTimeout(() => {
    let ajaxItems = [new BuzzLightYear(), new BuzzLightYear()];
    ajaxItems.forEach((i) => shopInventory.add(i));
    let newProviders = ajaxItems.map(i => ({provide: DisplayItems, useValue: i, multi: true}));
    injector = injector.resolveAndCreateChild([...newProviders, {provide: DisplayItems, useExisting: InitialItems, multi: true}]);
    displayItems = injector.get(DisplayItems);
    console.log('displayItems', displayItems);
    let config = injector.get(appConfig);
    console.log('config', config);
    console.log(shopInventory.report());
  }, 5000);
  return injector;
}



