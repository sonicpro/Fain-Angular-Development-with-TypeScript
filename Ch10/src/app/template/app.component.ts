import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Ch10';
  public onSubmit(formData) {
    let p = document.createElement("pre");
    p.innerHTML = JSON.stringify(formData);
    document.forms[0].appendChild(p);
  }
}
