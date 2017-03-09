import {IItem} from './items.types';
import {Injectable} from 'injection-js';
import {CheckerService} from './checker.service';
export type InventoryMap = Map<IItem, number>;

@Injectable()
export class ShopInventoryService {
  inventory: InventoryMap = new Map();

  constructor(private checkerService: CheckerService) {
  }

  add(item: IItem) {
    if (this.checkerService.check(item)) {
      this.inventory.set(item, (this.inventory.get(item) | 0) + 1);
    }
  }

  remove(item: IItem) {
    let current = this.inventory.get(item);
    if (current > 0)
      this.inventory.set(item, current - 1);
  }

  report() {
    return JSON.stringify(Array.from(this.inventory));
  }
}
