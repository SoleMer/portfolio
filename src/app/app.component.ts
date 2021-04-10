import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solemer';
  navHide: boolean = true;

  toggleNav() {
    this.navHide = !this.navHide;
  }
}