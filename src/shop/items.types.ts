export interface IItem {
  name: string;
  price: number;
}

export abstract class Toy implements IItem {
  public name: string;
  public price: number;

  abstract toggleDemoMode?()
}
export type PowerRangerModes = 'demo' | 'normal';
export class PowerRanger extends Toy {
  name = 'PowerRanger';
  price = 50;
  private mode: PowerRangerModes = 'demo';

  toggleDemoMode() {
    console.log('turning my switches');
    this.mode = (this.mode === 'demo' ) ? 'normal' : 'demo';
  }

}
export enum BuzzLightYearModes {demo, normal}

export class BuzzLightYear extends Toy {
  name = 'BuzzLightYear';
  price = 75;
  private mode: BuzzLightYearModes = BuzzLightYearModes.demo

  toggleDemoMode() {
    console.log('To Infinity and Beyond!!!!');
    this.mode = (this.mode === BuzzLightYearModes.demo) ? BuzzLightYearModes.normal : BuzzLightYearModes.demo;
  }

}
