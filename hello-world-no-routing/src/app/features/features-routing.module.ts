import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { environment } from '../../environments/environment';

const routes: Routes = [{
  component: HelloWorldComponent,
  path: environment.defaultRoute,
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FeaturesRoutingModule {

  public static ROUTES = routes;

}
