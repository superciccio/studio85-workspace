import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewColorComponent } from './new-color/new-color.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialsComponent} from './materials/materials.component';
import {NewMaterialComponent} from './new-material/new-material.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {NewProductTypeComponent} from './new-product-type/new-product-type.component';
import {ProductTypesComponent} from './product-types/product-types.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ShapesComponent } from './shapes/shapes.component';
import { NewShapeComponent } from './new-shape/new-shape.component';
import {MatListModule} from '@angular/material/list';
import { RelationsComponent } from './relations/relations.component';
import { NewRelationComponent } from './new-relation/new-relation.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    NewColorComponent,
    MaterialsComponent,
    NewMaterialComponent,
    HomeComponent,
    NewProductTypeComponent,
    ProductTypesComponent,
    CategoriesComponent,
    NewCategoryComponent,
    ShapesComponent,
    NewShapeComponent,
    RelationsComponent,
    NewRelationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
