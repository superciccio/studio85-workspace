import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'storefront';
  @ViewChild('mobileSideNav') mobileSideNav: MatSidenav;
  @ViewChild('sidenav') sidenav: MatSidenav;

  close(backdrop: string): void {
    this.mobileSideNav.close();
    this.sidenav.close();
  }


}
