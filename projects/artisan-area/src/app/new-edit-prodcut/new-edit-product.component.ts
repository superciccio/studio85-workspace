import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { VariantProdcutDialogComponent} from './variant-prodcut-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ProductVariantService} from '../shared/product-variant.service';
import {ConfigService} from '../shared/config.service';
import {SelectValue} from '../product-variant/product-variant.component';

@Component({
  selector: 'app-new-edit-product',
  templateUrl: './new-edit-product.component.html',
  styleUrls: ['./new-edit-product.component.scss']
})
export class NewEditProductComponent implements AfterViewInit, OnDestroy {

  nameFormControl = new FormControl('', [
    // Validators.required,
    Validators.minLength(4)
  ]);

  descFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16)
  ]);

  priceFormControl = new FormControl(0, [
    Validators.required,
    Validators.minLength(1)
  ]);


  quantityFormControl = new FormControl(0, [
    Validators.required,
    Validators.minLength(1)
  ]);

  categoryCtrl = new FormControl();



  visibility = true;
  files: any = [];

  categories: Category[] = [
    {id: 1, name: 'Chairs'},
    {id: 2, name: 'Side'},
    {id: 3, name: 'Table'},
    {id: 11, name: 'Non mi ricordo'},
  ];


  collections: Collection[] = [
    {id: 1, name: 'col-1'},
    {id: 2, name: 'col-2'},
    {id: 3, name: 'col-3'},
    {id: 11, name: 'Red-Violet'},
    {id: 12, name: 'Silver'},
    {id: 13, name: 'Copper'},

  ];

  promptCategory = 'Press <enter> to add ';
  promptCollection = 'Press <enter> to add ';
  filteredCategoryItems: Observable<Category[]>;
  filteredCollectionItems: Observable<Collection[]>;
  showAddCategoryButton  = false;
  showAddCollectionButton  = false;
  collectionCtrl = new FormControl();
  exclusiveFormControl = new FormControl(false);
  productTypeFormControl = new FormControl();
  productCategoryFormControl = new FormControl();

  productTypes: SelectValue[] = [];
  productCategories: SelectValue[] = [];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router,
              private productVariantService: ProductVariantService, private configService: ConfigService) {
    // @ts-ignore
    this.filteredCategoryItems = this.categoryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this.filterCategoriesItems(item) : this.categories.slice())
      );

    // @ts-ignore
    this.filteredCollectionItems = this.collectionCtrl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this.filterCollectionItems(item) : this.collections.slice())
      );

    let lang = navigator.language;
    lang = lang.slice(0, 2);

    this.configService.getConfig().then((c) => {
      this.productTypes = this.filterByLang(lang, c.productTypes);
      this.productCategories = this.filterByLang(lang, c.categories);
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

  ngOnDestroy(): void {
       localStorage.clear();
    }

  ngAfterViewInit(): void {
    // localStorage.setItem('nameProduct', this.nameFormControl.value);
    // localStorage.setItem('descProduct', this.descFormControl.value);
    this.nameFormControl.setValue(localStorage.getItem('nameProduct'));
    this.descFormControl.setValue(localStorage.getItem('descProduct'));
    }

  optionCategorySelected(option): void {
    if (option.value.name.indexOf(this.promptCategory) === 0) {
      this.addCategoryOption();
    }
  }

  optionCollectionSelected(option): void {
    if (option.value.name.indexOf(this.promptCollection) === 0) {
      this.addCollectionOption();
    }
  }

  categoryDisplayFn(c: any): string {
    if (c !== null && c.name !== undefined){
      return  c && c.name ? c.name : '';
    } else {
      return  c === null ? '' : c;
    }
  }

  collectionDisplayFn(c: any): string {
    if (c !== null && c.name !== undefined){
      return  c && c.name ? c.name : '';
    } else {
      return  c === null ? '' : c;
    }
  }

  filterCategoriesItems(cat: any): any[] {
    let results = [];
    if (cat.name !== undefined){
      results = this.categories.filter(item =>
        item.name.toLowerCase().indexOf(cat.name.toLowerCase()) === 0);

      this.showAddCategoryButton = results.length === 0;
      if (this.showAddCategoryButton) {
        results = [this.promptCategory + cat.name + ''];
      }
    } else {
      results = this.categories.filter(item =>
        item.name.toLowerCase().indexOf(cat.toLowerCase()) === 0);

      this.showAddCategoryButton = results.length === 0;
      if (this.showAddCategoryButton) {
        results = [{name: this.promptCategory + cat + '', id: 4567895670}];
      }
    }
    return results;
  }

  filterCollectionItems(cat: any): any[] {
    let results = [];
    if (cat.name !== undefined){
      results = this.collections.filter(item =>
        item.name.toLowerCase().indexOf(cat.name.toLowerCase()) === 0);

      this.showAddCollectionButton = results.length === 0;
      if (this.showAddCollectionButton) {
        results = [this.promptCollection + cat.name + ''];
      }
    } else {
      results = this.collections.filter(item =>
        item.name.toLowerCase().indexOf(cat.toLowerCase()) === 0);

      this.showAddCollectionButton = results.length === 0;
      if (this.showAddCollectionButton) {
        results = [{name: this.promptCollection + cat + '', id: 23456}];
      }
    }
    return results;
  }

  addCategoryOption(): void {
    const option = this.removePromptCategoryOption(this.categoryCtrl.value);
    if (!this.categories.some(entry => entry === option)) {

      const index = this.categories.push({id: this.categories.length, name: option}) - 1;
      this.categoryCtrl.setValue(this.categories[index]);
    }
  }

  addCollectionOption(): void {
    const option = this.removePromptCategoryOption(this.collectionCtrl.value);
    if (!this.collections.some(entry => entry === option)) {

      const index = this.categories.push({id: this.collections.length, name: option}) - 1;
      this.collectionCtrl.setValue(this.categories[index]);
    }
  }

  removePromptCategoryOption(option): any {
    if (option.name.startsWith(this.promptCategory)) {
      option = option.name.substring(this.promptCategory.length, option.name.length - 1);
    }
    return option;
  }

  uploadFile(event): void {
    if (event.length > 5 || this.files.length === 5){
      this.snackBar.open('Maximum number of images exceeded. Remove one, and try again', '' , {duration: 1000});
      return ;
    } else {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < event.length; index++) {
        const element = event[index] as File;
        console.log(element);
        this.files.push(element);
      }
    }
  }
  deleteAttachment(index): void {
    this.files.splice(index, 1);
  }

  priceAfterCommissionFormControl(): number {
    return this.priceFormControl.value * 1.5;
  }



  openVariantDialog(): void {
    const dialogRef = this.dialog.open(VariantProdcutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  compareProdTypeObject(object1: SelectValue, object2: SelectValue): boolean  {
    return object1 && object2 && object1.id === object2.id;
  }

  compareProdCategoryObject(object1: SelectValue, object2: SelectValue): boolean  {
    return object1 && object2 && object1.id === object2.id;
  }

  newVariant(): void {
    localStorage.setItem('nameProduct', this.nameFormControl.value);
    localStorage.setItem('descProduct', this.descFormControl.value);
    this.productVariantService.editProductVariant({
      colorId: 2,
      dimension: 'string',
      img: 'https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg',
      materialId: 1,
      price: 0,
      quantity: 12,
      shapeId: 1,
      note: 'dfd'
    });
    this.router.navigate(['products/new-variant']);
  }
}

export interface Collection {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}
