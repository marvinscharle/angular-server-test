import 'zone.js/dist/zone.js';
import { platformBrowser } from '@angular/platform-browser'
import { AppModule } from './app'
import { AppModuleNgFactory } from './ngfactory/src/app.ngfactory'
import { enableProdMode } from '@angular/core'

enableProdMode();

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory);