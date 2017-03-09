import {InjectionToken} from 'injection-js';
import {IItem} from './items.types';
export const appConfig = 'appConfig';
export interface IConfig {
  secret: string;
}

export const DisplayItems = new InjectionToken<IItem[]>('displayItems');
export const InitialItems = new InjectionToken<IItem[]>('displayItems');
export const Fetch = new InjectionToken<GlobalFetch>('fetch');
export const WindowToken = new InjectionToken<Window>('window');
export type WindowType = Window;
