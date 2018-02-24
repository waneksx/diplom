import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/startComponent/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);