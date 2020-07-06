import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {NewEditProductComponent} from './new-edit-prodcut/new-edit-product.component';
import {ProductVariantComponent} from './product-variant/product-variant.component';
import {OrdersComponent} from './orders/orders.component';
import {MessagesComponent} from './messages/messages.component';
import {ReadMessagedComponent} from './read-messaged/read-messaged.component';
import {CollectionComponent} from './collection/collection.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {AppGuardService} from '../../../storefront/src/app/app-guard.service';


const routes: Routes = [
  {path: 'artisan-area/home', component: HomeComponent, canActivate: [AppGuardService]},
  {path: 'artisan-area/account-settings', component: AccountSettingsComponent},
  {path: 'artisan-area/products', component: ProductsComponent},
  {path: 'artisan-area/products/new', component: NewEditProductComponent},
  {path: 'artisan-area/products/new-variant', component: ProductVariantComponent},
  {path: 'artisan-area/collections', component: CollectionComponent},
  {path: 'artisan-area/collections/new', component: CollectionComponent},
  {path: 'artisan-area/orders', component: OrdersComponent},
  {path: 'artisan-area/discounts', component: DiscountsComponent},
  {path: 'artisan-area/messages', component: MessagesComponent},
  {path: 'artisan-area/messages/read', component: ReadMessagedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public routes = routes;
}
