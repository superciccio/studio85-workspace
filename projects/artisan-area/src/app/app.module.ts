import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessagesComponent} from './messages/messages.component';
import {ReadMessagedComponent} from './read-messaged/read-messaged.component';
import {NewMessageDialogComponent} from './messages/new-message-dialog.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {DiscountTableComponent} from './discount-table/discount-table.component';
import {NewDiscountDialogComponentComponent} from './discounts/new-discount-dialog-component/new-discount-dialog-component.component';
import {ChangeDiscountDialogComponentComponent} from './discounts/change-discount-dialog-component/change-discount-dialog-component.component';
import {CollectionComponent} from './collection/collection.component';
import {ProductVariantComponent} from './product-variant/product-variant.component';
import {FileUpload} from './file-upload/file-upload';
import {HomeComponent} from './home/home.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {OrdersComponent} from './orders/orders.component';
import {ProductTableComponent} from './product-table/product-table.component';
import {NewEditProductComponent} from './new-edit-prodcut/new-edit-product.component';
import {ProductsComponent} from './products/products.component';
import {TopHeaderComponent} from './top-header/top-header.component';
import {VariantProdcutDialogComponent} from './new-edit-prodcut/variant-prodcut-dialog.component';
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
import {MatFormFieldModule} from '@angular/material/form-field';
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
import {HttpClientModule} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MAT_BOTTOM_SHEET_DEFAULT_OPTIONS} from '@angular/material/bottom-sheet';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HomeComponent,
    AccountSettingsComponent,
    OrdersComponent,
    ProductTableComponent,
    NewEditProductComponent,
    ProductsComponent,
    VariantProdcutDialogComponent,
    MessagesComponent,
    ReadMessagedComponent,
    NewMessageDialogComponent,
    DiscountsComponent,
    DiscountTableComponent,
    NewDiscountDialogComponentComponent,
    ChangeDiscountDialogComponentComponent,
    CollectionComponent,
    ProductVariantComponent,
    FileUpload
  ],
  imports: [
    AppRoutingModule,
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
  ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
