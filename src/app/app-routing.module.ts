import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BFlexboxComponent } from './Components/b-flexbox/b-flexbox.component';
import { DirectivesComponent } from './Components/directivesComponent/directives.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
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
export class AppRoutingModule { }
