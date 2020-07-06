import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trader-area';

  constructor(private router: Router) {
  }

  logout(): void {

    //TODO logout user
    this.router.navigateByUrl('/');
  }
}
