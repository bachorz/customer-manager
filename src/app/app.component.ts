import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: [
    '.isActive {text-decoration: underline;}',
    '.oddCat {color: green}'
  ]
})
export class AppComponent {

  constructor() {
  }
}
