import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="main">
              <h2>App component</h2>
    
              <app-search></app-search>  <b><-- Search component</b>
              <p></p>
              
              <a [routerLink]="['/']">eBay</a>
              <a [routerLink]="['/amazon']">Amazon</a>
              <router-outlet></router-outlet>
              </div>`,
  styles: ['.main {background: yellow}']
})

export class AppComponent{
}
