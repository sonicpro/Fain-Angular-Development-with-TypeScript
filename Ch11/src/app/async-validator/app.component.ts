import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ssnValidator } from './ssn-validator';
import { SsnValidatorService } from "./ssn-validator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Ch11';
  public myFormModel: FormGroup;

  public onSubmit() { // Parameter is no more needed comparing to template-driven form.
    let p = document.createElement("pre");
    p.innerHTML = JSON.stringify(this.myFormModel.value);
    document.forms[0].appendChild(p);
  }

  constructor(private fb: FormBuilder,
    private ssnValidatorService: SsnValidatorService) {
    this.myFormModel = this.fb.group({
      socialSecurity: ["", ssnValidator, this.ssnValidatorService.checkWorkAuthorization.bind(this.ssnValidatorService)]
    });
  }
}