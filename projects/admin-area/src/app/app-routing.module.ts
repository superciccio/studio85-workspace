import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColorsComponent} from './colors/colors.component';
import {NewColorComponent} from './new-color/new-color.component';
import {NewMaterialComponent} from './new-material/new-material.component';
import {MaterialsComponent} from './materials/materials.component';
import {ProductTypesComponent} from './product-types/product-types.component';
import {NewProductTypeComponent} from './new-product-type/new-product-type.component';
import {CategoriesComponent} from './categories/categories.component';
import {HomeComponent} from './home/home.component';
import {ShapesComponent} from './shapes/shapes.component';
import {NewShapeComponent} from './new-shape/new-shape.component';
import {RelationsComponent} from './relations/relations.component';
import {NewRelationComponent} from './new-relation/new-relation.component';
import {NewCategoryComponent} from './new-category/new-category.component';


const routes: Routes = [
  // {path: 'admin-area/home', canActivate: [AdminGuard]}
  {path: 'link', component: HomeComponent},

  {path: 'colors', component: ColorsComponent},
  {path: 'colors-new/:id', component: NewColorComponent},
  {path: 'colors-new', component: NewColorComponent},

  {path: 'categories', component: CategoriesComponent},
  {path: 'categories-new', component: NewCategoryComponent},
  {path: 'categories-new/:id', component: NewCategoryComponent},

  {path: 'materials', component: MaterialsComponent},
  {path: 'materials-new', component: NewMaterialComponent},
  {path: 'materials-new/:id', component: NewMaterialComponent},

  {path: 'product-types', component: ProductTypesComponent},
  {path: 'product-types-new', component: NewProductTypeComponent},
  {path: 'product-types-new/:id', component: NewProductTypeComponent},

  {path: 'relations', component: RelationsComponent},
  {path: 'relations-new', component: NewRelationComponent},
  {path: 'relations-new/:id', component: NewRelationComponent},

  {path: 'shapes', component: ShapesComponent},
  {path: 'shapes-new', component: NewShapeComponent},
  {path: 'shapes-new/:id', component: NewShapeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public routes = routes;
}
