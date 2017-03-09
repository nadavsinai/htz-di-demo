import {IConfig, Fetch} from './general.types';
export function getConfig(fetch: GlobalFetch): IConfig {
  console.log('doing my work with fetch...', fetch);
  return {secret: 'shhh'}
}
