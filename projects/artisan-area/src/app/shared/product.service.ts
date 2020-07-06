import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Product} from '../../../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchOne(id: number): Observable<Product>{
    return this.http.get<Product>(environment.apiEndpoint + '/crud/products/' + id);
  }

  fetchAll(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.apiEndpoint + '/crud/products');
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(environment.apiEndpoint + '/crud/products/' + id);
  }

  save(product: Product): Observable<any>{
    return this.http.post(environment.apiEndpoint + '/products', product);
  }
}
