import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppModule as ArtisanModule} from '../../../artisan-area/src/app/app.module';
import {AppModule as AdminModule} from '../../../admin-area/src/app/app.module';
import {AppModule as TraderModule} from '../../../trader-area/src/app/app.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {Router} from '@angular/router';
import {AuthInterceptorInterceptor} from './auth-interceptor.interceptor';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BasketSideBarComponent } from './basket-side-bar/basket-side-bar.component';
import {MatBadgeModule} from '@angular/material/badge';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { FiltersMobileBottomSheetComponent } from './filters-mobile-bottom-sheet/filters-mobile-bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TradeComponent } from './trade/trade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundComponent,
    ForbiddenComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    TopBarComponent,
    BasketSideBarComponent,
    FiltersMobileBottomSheetComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactsComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatCommonModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    HttpClientModule,
    MatProgressBarModule,
    AppRoutingModule,
    ArtisanModule,
    TraderModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatBadgeModule,
    OverlayModule,
    PortalModule,
    FlexLayoutModule,
    MatBottomSheetModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      // tslint:disable-next-line:typedef
      useFactory(router: Router) {
        return new AuthInterceptorInterceptor(router);
      },
      multi: true,
      deps: [Router]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
