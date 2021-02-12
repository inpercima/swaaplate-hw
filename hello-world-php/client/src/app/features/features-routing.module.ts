import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { environment } from '../../environments/environment';

const routes: Routes = [{
  component: HelloWorldComponent,
  path: environment.defaultRoute,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FeaturesRoutingModule {

  static ROUTES = routes;
}
