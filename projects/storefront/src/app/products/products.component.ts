import {AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from '../../../../artisan-area/src/app/shared/config.service';
import {SelectValue} from '../../../../artisan-area/src/app/product-variant/product-variant.component';
import {MatGridList} from '@angular/material/grid-list';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {FiltersMobileBottomSheetComponent} from '../filters-mobile-bottom-sheet/filters-mobile-bottom-sheet.component';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit, OnDestroy, OnInit {

  materials: SelectValue[] = [];
  colors: SelectValue[] = [];
  types: SelectValue[] = [];
  shapes: SelectValue[] = [];
  categories: SelectValue[] = [];

  listFurnitures: SelectValue[] = [];
  listDecors: SelectValue[] = [];
  listLightining: SelectValue[] = [];
  private routeSub: Subscription;

  @ViewChild('grid') grid: MatGridList;

  listFurnituresChecked: Map<number, boolean>;
  listLightiningsChecked: Map<number, boolean>;
  listDecorsChecked: Map<number, boolean>;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 3,
    xs: 2
  };
  allFurnitureToBeChecked = false;
  allLightToBeChecked = false;
  allDecorToBeChecked = false;

  constructor(private configService: ConfigService, private observableMedia: MediaObserver, private bottomSheet: MatBottomSheet,
              private route: ActivatedRoute) {
    const config = configService.getConfig();
    let lang = navigator.language;
    lang = lang.slice(0, 2);
    config.then((cn) => {
     this.materials = this.filterByLang(lang, cn.materials, 'material');
     this.colors = this.filterByLang(lang, cn.colors, 'color');
     this.types = this.filterByLang(lang, cn.productTypes, 'productType');
     this.shapes = this.filterByLang(lang, cn.shapes, 'shape');
     this.categories = this.filterByLang(lang, cn.categories, 'category');
     const catProd = cn.filtersByCategory;
     for (const relation of catProd) {
        if (relation.categoryId === 5){
          const res = [];
          this.listFurnituresChecked = new Map();
          this.listDecorsChecked = new Map();
          this.listLightiningsChecked = new Map();
          for (const nmb of relation.productTypes) {
            const find = cn.productTypes.find((pt) => pt.id === nmb);
            res.push(find);
            this.listFurnituresChecked[nmb] = this.allFurnitureToBeChecked;
          }
          this.listFurnitures = this.filterByLang(lang, res, 'productType');
        }
        if (relation.categoryId === 6){
         const res = [];
         for (const nmb of relation.productTypes) {
           const find = cn.productTypes.find((pt) => pt.id === nmb);
           res.push(find);
           this.listDecorsChecked[nmb] = this.allDecorToBeChecked;
         }
         this.listDecors = this.filterByLang(lang, res, 'productType');
       }
        if (relation.categoryId === 7){
         const res = [];
         for (const nmb of relation.productTypes) {
           const find = cn.productTypes.find((pt) => pt.id === nmb);
           res.push(find);
           this.listLightiningsChecked[nmb] = this.allLightToBeChecked;
         }
         this.listLightining = this.filterByLang(lang, res, 'productType');
       }
      }
    });

  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }



  filterByLang(lang: string, source: any[], sortBy: string): SelectValue[] {
    const result = [];
    for (const s of source) {
      for (const intlValue of s.value) {
        if (intlValue.language === lang) {
          result.push({id: s.id, desc: intlValue});
        }
      }
    }

    result.sort((a, b) => a.desc[sortBy].toString().localeCompare(b.desc[sortBy].toString()));

    return result;
  }


  ngAfterViewInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange[]) => {
      this.grid.cols = this.gridByBreakpoint[change[0].mqAlias];
    });

  }

  ngOnInit(): void {
    this.routeSub = this.routeSub = this.route.params.subscribe(params => {
      if (params.filterFromHome === 'furniture'){
        this.allFurnitureToBeChecked = true;
      }
      if (params.filterFromHome === 'decor'){
        this.allDecorToBeChecked = true;
      }
      if (params.filterFromHome === 'lightining'){
        this.allLightToBeChecked = true;
      }
    });
  }

  openMobileFilters(): void {
    this.bottomSheet.open(FiltersMobileBottomSheetComponent);
  }

  allFurnituresChecked(id: number): boolean {
    return this.listFurnituresChecked[id];
  }


  allDecorsChecked(id: number): boolean {
    return this.listFurnituresChecked[id];
  }


  allLightesChecked(id: number): boolean {
    return this.listFurnituresChecked[id];
  }

  unselectAllFurnitures(): void {
    const l = new Map();
    const numElemet =  Array(this.listFurnituresChecked.keys()).length;

    if (numElemet === 1) {
      this.listFurnitures.forEach((el) => {
        l[el.id] =  !this.listFurnituresChecked[el.id];
      });
    }
    this.listFurnituresChecked = l;
  }

  unselectAllDecors(): void {
    const l = new Map();
    const numElemet =  Array(this.listDecorsChecked.keys()).length;

    if (numElemet === 1) {
      this.listDecors.forEach((el) => {
        l[el.id] =  !this.listDecorsChecked[el.id];
      });
    }
    this.listDecorsChecked = l;
  }

  unselectAllLightinings(): void {
    const l = new Map();
    const numElemet =  Array(this.listLightiningsChecked.keys()).length;

    if (numElemet === 1) {
      this.listLightining.forEach((el) => {
        l[el.id] =  !this.listLightiningsChecked[el.id];
      });
    }
    this.listLightiningsChecked = l;
  }
}
