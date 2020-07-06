import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer, MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-basket-side-bar',
  templateUrl: './basket-side-bar.component.html',
  styleUrls: ['./basket-side-bar.component.scss']
})
export class BasketSideBarComponent {


  @ViewChild('sidenav') basket: MatSidenav;
  reason: any;

  constructor() {}

  openBasketOverlay(): void {
    this.basket.open();
  }


  close(escape: string): void {
    this.reason = escape;
    this.basket.close();
  }

}
