import {  Component, Input }  from '@angular/core';

@Component({
  selector: 'order-processor',
  template: `
    <span *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</span>
  `,
  styles:[`:host {background: cyan;}`]
})
export class OrderProcessorComponent {

  @Input() quantity: number;

  private _stockSymbol: string;

  @Input() public set stockSymbol(value: string) {
    if (value !== undefined) {
      this._stockSymbol = value;
      console.log(`Buying ${this.quantity} shares of ${value}`);
    }
  }

  // getter is used in the template.
  public get stockSymbol(): string {
    return this._stockSymbol;
  }
}
