// import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environment';

// if (environment.production) {
//   enableProdMode();
// }

// Configura dotenv para cargar variables de entorno
// if (environment.production) {
//   const dotenv = require('dotenv');
//   const result = dotenv.config();
//   if (result.error) {
//     console.error('Error loading .env file:', result.error);
//   }
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
