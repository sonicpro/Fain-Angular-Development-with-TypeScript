import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Ch10';
  public myFormModel: FormGroup;

  public onSubmit() { // Parameter is no more needed comparing to template-driven form.
    let p = document.createElement("pre");
    p.innerHTML = JSON.stringify(this.myFormModel.value);
    document.forms[0].appendChild(p);
  }

  constructor() {
    this.myFormModel = new FormGroup({
      id: new FormControl(""),
      description: new FormControl(""),
      seller: new FormControl()
    });
  }

  public updateEntireForm() {
    this.myFormModel.setValue({
      id: 123,
      description: "A great product",
      seller: "XYZ Corp"
    });
  };

  public updatePartOfTheForm() {
    this.myFormModel.patchValue({
      description: "The best product",
    });
  };
}
