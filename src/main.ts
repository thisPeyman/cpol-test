import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ROOT_PROVIDERS } from './app/shell/root-providers';

bootstrapApplication(AppComponent, {
  providers: ROOT_PROVIDERS,
});
