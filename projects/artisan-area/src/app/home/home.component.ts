import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{

  isSmall: any;

  @ViewChild('sidenav') sidenav: MatSidenav;

  forceClose = false;

  constructor(changeDetectorRef: ChangeDetectorRef, breakpoint: BreakpointObserver, private  router: Router) {

    this.router.events.subscribe(event => {
      // close sidenav on routing
      this.forceClose = true;

    });

    const layoutChanges = breakpoint.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.Tablet,
      Breakpoints.Small,
      Breakpoints.XSmall,
    ]);

    layoutChanges.subscribe(result => {
      this.isSmall = result.breakpoints['(max-width: 599.99px)']
        || result.breakpoints['(min-width: 600px) and (max-width: 839.99px)']
        ||  result.breakpoints['(min-width: 600px) and (max-width: 959.99px)'];
      if (this.sidenav !== undefined){
        if (!this.isSmall){
          this.sidenav.open();
        } else {
          this.sidenav.close();
        }
      }
    });
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      if (!this.isSmall){
        this.sidenav.open();
        if( this.forceClose ){
          this.sidenav.close();
        }

      } else {
        this.sidenav.close();
      }
    }, 10);

  }

}
