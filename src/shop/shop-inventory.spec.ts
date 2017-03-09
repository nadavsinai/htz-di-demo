import {ReflectiveInjector} from 'injection-js';
import {ShopInventoryService} from './shop-inventory.service';
import {CheckerService} from './checker.service';
import {expect} from 'chai';
import * as TypeMoq from "typemoq";
describe('shop-inventory', function () {
  let injector, service: ShopInventoryService, mockChecker: TypeMoq.IMock<CheckerService>;


  beforeEach(() => {
    mockChecker = TypeMoq.Mock.ofType<CheckerService>();
    mockChecker.setup((m: CheckerService) => m.check(TypeMoq.It.isAny())).returns(() => true);
    injector = ReflectiveInjector.resolveAndCreate([ShopInventoryService, {provide: CheckerService, useValue: mockChecker.object}]);
    service = injector.get(ShopInventoryService);
  });

  it('works without problems', function () {
    expect(service).to.be.ok;
  });
  describe('function add', function () {
    it('uses the checker service check function ', function () {
      let item = {name: 't', price: 5}
      service.add(item);
      mockChecker.verify(x => x.check(item), TypeMoq.Times.once());
    });
  });
})
