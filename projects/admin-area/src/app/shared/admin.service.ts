import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Color} from '../../../../model/color';
import {Material} from '../../../../model/material';
import {ColorResponse} from '../colors/colors-datasource';
import {ProductType} from '../../../../model/product-type';
import {MaterialResponse} from '../materials/materials-datasource';
import {ProductTypeResponse} from '../product-types/product-type-datasource';
import {CategoryResponse} from '../categories/categories-datasource';
import {Category} from '../../../../model/category';
import {ShapeResponse} from '../shapes/shapes-datasource';
import {Shape} from '../../../../model/shape';
import {Relation} from '../../../../model/relation';
import {RelationResponse} from '../relations/relations-datasource';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  newColor(data: Color): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + '/intl/color', data);
  }

  newMaterial(data: Material): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + '/intl/material', data);
  }

  newCategory(data: Category): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + '/intl/category', data);
  }

  newShape(data: Shape): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + '/intl/shape', data);
  }

  newProductType(data: ProductType): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + '/intl/productType', data);
  }

  newRelation(data: Relation): Observable<any> {
    return this.httpClient.post<any>(environment.apiEndpoint + '/variantRelation', data);
  }

  fetchAll(): Observable<ColorResponse[]> {
    return this.httpClient.get<ColorResponse[]>(environment.apiEndpoint + '/intl/color');
  }

  fetchAllMaterial(): Observable<MaterialResponse[]> {
    return this.httpClient.get<MaterialResponse[]>(environment.apiEndpoint + '/intl/material');
  }

  fetchAllProductTypes(): Observable<ProductTypeResponse[]> {
    return this.httpClient.get<ProductTypeResponse[]>(environment.apiEndpoint + '/intl/productType');
  }

  fetchAllCategories(): Observable<CategoryResponse[]> {
    return this.httpClient.get<CategoryResponse[]>(environment.apiEndpoint + '/intl/category');
  }

  fetchAllShapes(): Observable<ShapeResponse[]> {
    return this.httpClient.get<ShapeResponse[]>(environment.apiEndpoint + '/intl/shape');
  }

  fetchAllRelation(): Observable<RelationResponse[]> {
    return this.httpClient.get<RelationResponse[]>(environment.apiEndpoint + '/variantRelation');
  }

  deleteColor(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.delete<any>(environment.apiEndpoint + '/intl/color/' + id);
  }

  deleteProductType(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.delete<any>(environment.apiEndpoint + '/intl/productType/' + id);
  }

  fetchOneColor(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<any>(environment.apiEndpoint + '/intl/color/' + id);
  }

  fetchOneMaterial(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<any>(environment.apiEndpoint + '/intl/material/' + id);
  }

  fetchOneProductType(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<any>(environment.apiEndpoint + '/intl/productType/' + id);
  }

  fetchOneCategory(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<any>(environment.apiEndpoint + '/intl/category/' + id);
  }
  fetchOneShape(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<any>(environment.apiEndpoint + '/intl/shape/' + id);
  }

  fetchOneRelation(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<any>(environment.apiEndpoint + '/variantRelation/' + id);
  }

  deleteMaterial(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.delete<any>(environment.apiEndpoint + '/intl/material/' + id);
  }

  deleteCategory(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.delete<any>(environment.apiEndpoint + '/intl/category/' + id);
  }

  deleteShape(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.delete<any>(environment.apiEndpoint + '/intl/shape/' + id);
  }

  updateColor(data: Color, id: number): Observable<any> {
    return this.httpClient.put<any>(environment.apiEndpoint + '/intl/color/' + id, data);
  }

  updateMaterial(data: Material, id: number): Observable<any> {
    return this.httpClient.put<any>(environment.apiEndpoint + '/intl/material/' + id, data);
  }

  updateProductType(data: ProductType, id: number): Observable<any> {
    return this.httpClient.put<any>(environment.apiEndpoint + '/intl/productType/' + id, data);
  }

  updateCategory(data: Category, id: number): Observable<any> {
    return this.httpClient.put<any>(environment.apiEndpoint + '/intl/category/' + id, data);
  }

  updateShape(data: Shape, id: number): Observable<any> {
    return this.httpClient.put<any>(environment.apiEndpoint + '/intl/shape/' + id, data);
  }

  updateRelation(data: Relation, id: number): Observable<any> {
    return this.httpClient.put<any>(environment.apiEndpoint + '/variantRelation/' + id, data);
  }

  deleteRelation(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.delete<any>(environment.apiEndpoint + '/variantRelation/' + id);
  }
}
