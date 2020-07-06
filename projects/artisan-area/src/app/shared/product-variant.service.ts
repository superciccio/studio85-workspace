import { Injectable } from '@angular/core';
import {ProductVariant} from '../../../../model/product-variant';

@Injectable({
  providedIn: 'root'
})
export class ProductVariantService {

  private productVariant: ProductVariant;

  private listExistingVariant: ProductVariant[];

  constructor() { }

  editProductVariant(productVariant: ProductVariant): void {
    this.productVariant = productVariant;
  }

  getProductVariant(): ProductVariant {
    return this.productVariant;
  }

  setListExistingVariant(productVariants: ProductVariant[]): void {
    this.listExistingVariant = productVariants;
  }
}
