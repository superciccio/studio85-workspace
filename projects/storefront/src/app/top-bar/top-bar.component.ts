import {Component, Input} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent{

  @Input() sidenav: MatSidenav;
  @Input() mobileMenu: MatSidenav;

  showBasket = false;

  constructor(private route: Router) {
    this.route.events.subscribe(event => {
      // close sidenav on routing
      this.sidenav.close();
    });
  }

  open(openBasket: boolean): void {
    this.showBasket = openBasket;
    this.sidenav.toggle();
  }

  openMobileMenu(): void {
    this.mobileMenu.toggle();
  }
}
