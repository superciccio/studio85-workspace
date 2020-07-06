import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-filters-mobile-bottom-sheet',
  templateUrl: './filters-mobile-bottom-sheet.component.html',
  styleUrls: ['./filters-mobile-bottom-sheet.component.scss']
})
export class FiltersMobileBottomSheetComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<FiltersMobileBottomSheetComponent>) { }

  onApplyFilters(): void{
    this.bottomSheetRef.dismiss();
  }

  onClearFilters(): void{
    this.bottomSheetRef.dismiss();
  }

}
