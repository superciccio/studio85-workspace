import {Component} from '@angular/core';
import {ConfigService} from '../shared/config.service';
import {FormControl} from '@angular/forms';
import {ProductVariantService} from '../shared/product-variant.service';
import {Config} from '../../../../model/config';

@Component({
  selector: 'app-product-variant',
  templateUrl: './product-variant.component.html',
  styleUrls: ['./product-variant.component.scss']
})
export class ProductVariantComponent {

  config: Config;

  shapes: SelectValue[] = [];
  materials: SelectValue[] = [];
  categories: SelectValue[] = [];
  colors: SelectValue[] = [];
  productTypes: SelectValue[] = [];

  dimensionFormControl = new FormControl();
  isPriceDifferent = new FormControl(false);
  price = new FormControl(0);
  quantityFormControl = new FormControl();

  colorFormControl = new FormControl();
  shapeFormControl = new FormControl();
  materialFormControl = new FormControl();
  noteFormControl = new FormControl();

  urlImg: string;
  descVariant: string;

  constructor(private configService: ConfigService, private productVariant: ProductVariantService) {
    let lang = navigator.language;
    lang = lang.slice(0, 2);
    this.configService.getConfig().then((config) => {
      this.shapes = this.filterByLang(lang, this.config.shapes);
      this.colors = this.filterByLang(lang, this.config.colors);
      this.colors.sort((a, b) => a.desc.color.toString().localeCompare(b.desc.color.toString()));
      this.categories = this.filterByLang(lang, this.config.categories);
      this.materials = this.filterByLang(lang, this.config.materials);
      this.productTypes = this.filterByLang(lang, this.config.productTypes);

      if (this.productVariant.getProductVariant() !== undefined){
        const pv = this.productVariant.getProductVariant();
        this.colorFormControl.setValue(pv.colorId);
        this.shapeFormControl.setValue(pv.shapeId);
        this.materialFormControl.setValue(pv.materialId);
        this.noteFormControl.setValue(pv.note);
        this.urlImg = pv.img;
        this.descVariant = this.colors.find((c) => c.id === pv.colorId).desc.color;
        this.descVariant += ',' + this.shapes.find((c) => c.id === pv.shapeId).desc.shape;
        this.descVariant += ',' + this.materials.find((c) => c.id === pv.materialId).desc.material;
        this.descVariant += ', (' + pv.dimension + ')';
      }

    });
  }

  filterByLang(lang: string, source: any[], ): any[] {
    const result = [];
    for (const s of source) {
      for (const intlValue of s.value) {
        if (intlValue.language === lang) {
          result.push({id: s.id, desc: intlValue});
        }
      }
    }

    return result;
  }

  back(): void {
    window.history.back();
  }


  compareColorObject(object1: SelectValue, object2: SelectValue): boolean  {
    return object1 && object2 && object1.id === object2.id;
  }

  compareShapeObject(object1: SelectValue, object2: SelectValue): boolean  {
    return object1 && object2 && object1.id === object2.id;
  }

  compareMaterialObject(object1: SelectValue, object2: SelectValue): boolean  {
    return object1 && object2 && object1.id === object2.id;
  }


}

export interface SelectValue {
  id: number;
  desc: any;
}
