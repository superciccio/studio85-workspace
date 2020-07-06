import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule as AdminRouting} from '../../../admin-area/src/app/app-routing.module';
import {AppRoutingModule as ArtisanRouting} from '../../../artisan-area/src/app/app-routing.module';
import {AppRoutingModule as CustomerRouting} from '../../../customer-area/src/app/app-routing.module';
import {AppRoutingModule as TraderRouting} from '../../../trader-area/src/app/app-routing.module';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {TradeComponent} from './trade/trade.component';
import {ServicesComponent} from './services/services.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactsComponent} from './contacts/contacts.component';


const routes: Routes = [
  // { path: 'artisan-area/home',   redirectTo: '/artisan-area/home', pathMatch: 'full', canActivate: [StoreGuardGuard] },
  { path: '', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '403', component: ForbiddenComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'products/:filterFromHome', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'trade', component: TradeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },

  ...new AdminRouting().routes,
  ...new ArtisanRouting().routes,
  ...new CustomerRouting().routes,
  ...new TraderRouting().routes,
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
