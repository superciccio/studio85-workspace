import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountInformationComponent} from './account-information/account-information.component';
import {WishListsComponent} from './wish-lists/wish-lists.component';
import {OrdersComponent} from './orders/orders.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'trader-area/account-information', component: AppComponent},
  {path: 'trader-area/my-orders', component: OrdersComponent},
  {path: 'trader-area/wish-list', component: WishListsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public routes = routes;
}
