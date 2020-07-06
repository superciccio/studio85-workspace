import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-variant-product-dialog',
  templateUrl: 'variant-product-dialog.html',
  styleUrls: ['variant-product.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VariantProdcutDialogComponent implements OnInit{


  constructor() {
    // @ts-ignore
    this.filteredMaterialsItems = this.materialCtrl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this.filterItems(item) : this.materials.slice())
      );

    // @ts-ignore
    this.filteredColorsItems = this.colorCtrl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this.filterColorsItems(item) : this.colours.slice())
      );

  }



  materials = [
    'Brass',
    'Bronze',
    'Concrete',
    'Copper',
    'Fabric',
    'Glass',
    'Leather',
    'Marble',
    'Metal',
    'Mirror',
    'Stone',
    'Wood'
  ];



  colours: Colour[] = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Yellow'},
    {id: 3, name: 'Blue'},
    {id: 4, name: 'Orange'},
    {id: 5, name: 'Violet'},

    {id: 6, name: 'Red-Orange'},
    {id: 7, name: 'Yellow-Orange'},
    {id: 8, name: 'Yellow-Green'},
    {id: 9, name: 'Blue-Green'},
    {id: 10, name: 'Blue-Violet'},
    {id: 11, name: 'Red-Violet'},
    {id: 12, name: 'Silver'},
    {id: 13, name: 'Copper'},

  ];



  dimensionControl = new FormControl();

  materialCtrl = new FormControl();
  filteredMaterialsItems: Observable<string[]>;
  showAddButtonInMaterial = false;
  promptInMaterial = 'Press <enter> to add ';

  colorCtrl = new FormControl();
  filteredColorsItems: Observable<Colour[]>;
  showAddButtonInColor = false;
  promptInColor = 'Press <enter> to add ';

  ngOnInit(): void {

  }

  filterItems(name: string): string[] {
    let results = this.materials.filter(item =>
      item.toLowerCase().indexOf(name.toLowerCase()) === 0);

    this.showAddButtonInMaterial = results.length === 0;
    if (this.showAddButtonInMaterial) {
      results = [this.promptInMaterial + name + ''];
    }

    return results;
  }

  filterColorsItems(color: any): any[] {
    let results = [];
    if (color.name !== undefined){
      results = this.colours.filter(item =>
        item.name.toLowerCase().indexOf(color.name.toLowerCase()) === 0);

      this.showAddButtonInColor = results.length === 0;
      if (this.showAddButtonInColor) {
        results = [this.promptInColor + color.name + ''];
      }
    } else {
      results = this.colours.filter(item =>
        item.name.toLowerCase().indexOf(color.toLowerCase()) === 0);

      this.showAddButtonInColor = results.length === 0;
      if (this.showAddButtonInColor) {
        results = [{name: this.promptInColor + color + '', id: 4567890}];
      }
    }
    return results;
  }

  optionSelected(option): void {
    if (option.value.indexOf(this.promptInMaterial) === 0) {
      this.addOption();
    }
  }

  optionColorSelected(option): void {
    if (option.value.name.indexOf(this.promptInColor) === 0) {
      this.addColorOption();
    }
  }

  addOption(): void {
    const option = this.removePromptFromOption(this.materialCtrl.value);
    if (!this.materials.some(entry => entry === option)) {
      const index = this.materials.push(option) - 1;
      this.materialCtrl.setValue(this.materials[index]);
    }
  }

  addColorOption(): void {
    const option = this.removePromptColorFromOption(this.colorCtrl.value);
    if (!this.colours.some(entry => entry === option)) {

      const index = this.colours.push({id: this.colours.length, name: option}) - 1;
      this.colorCtrl.setValue(this.colours[index]);
    }
  }

  removePromptColorFromOption(option): any {
    if (option.name.startsWith(this.promptInColor)) {
      option = option.name.substring(this.promptInColor.length, option.name.length - 1);
    }
    return option;
  }

  removePromptFromOption(option): any {
    if (option.startsWith(this.promptInMaterial)) {
      option = option.substring(this.promptInMaterial.length, option.length - 1);
    }
    return option;
  }

  materialDisplayFn(m: string): string {
  return m ? m : '';
}

  colorDisplayFn(c: any): string {
    if (c !== null && c.name !== undefined){
      return  c && c.name ? c.name : '';
    } else {
      console.log(c);
      return  c === null ? '' : c;
    }
  }
}

export interface Colour {
  id: number;
  name: string;
}
