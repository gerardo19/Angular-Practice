import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BFlexboxComponent } from './Components/b-flexbox/b-flexbox.component';
import { DirectivesComponent } from './Components/directivesComponent/directives.component';
import { PreloadingStrategyService } from './services/preloading-strategy.service';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule',
    data: { preload: true }
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: 'flex',
    component: BFlexboxComponent
  },
  {
    path: 'directive',
    component: DirectivesComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/* Para precargar todos los módulos
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    
     //Para precargar los modulos, luego de que ya se cargó toda la aplicación.
      //https://medium.com/@adrianfaciu/custom-preloading-strategy-for-angular-modules-b3b5c873681a
    enableTracing: true,   //  <---- debuggin purposes only
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})*/

/* Para precargar los módules custom
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,   //  <---- debuggin purposes only
    preloadingStrategy: PreloadingStrategyService
  })],
  exports: [RouterModule]
})
*/

export class AppRoutingModule { }
