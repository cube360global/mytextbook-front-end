import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';


export function getBaseUrl(): string {
  // return document.getElementsByTagName('base')[0].href + 'api/';
  return 'http://34.120.186.49/backend/';
}

export function getBaseUrlWithOutApi(): string {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  {provide: 'BASE_URL', useFactory: getBaseUrl, deps: []},
  {provide: 'SIGNAL_R_URL', useFactory: getBaseUrlWithOutApi, deps: []}
];


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
