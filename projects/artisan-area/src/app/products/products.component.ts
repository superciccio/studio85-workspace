import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isLoading = false;
  hasResult = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.fetchAll().subscribe((res)=>{
      console.log(res);
      this.isLoading = false;
      this.hasResult = res.length > 0;
    });
  }

}
