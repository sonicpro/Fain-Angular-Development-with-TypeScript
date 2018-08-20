import { Component } from '@angular/core';
import {Stock} from './istock';

// Acts as mediator between PriceQuoterComponent (has @Output "buy" event) and OrderProcessorComponent (has @Input "stock" property).
@Component({
  selector: 'app-root',
  template: `
    <price-quoter (buy)="priceQuoteHandler($event)"></price-quoter>
    
    <order-processor [stock]="receivedStock"></order-processor>
  `
})
export class AppComponent {
  receivedStock: Stock;

  priceQuoteHandler(event:Stock) {
    // "Unwrap" the "buy" event payload.
    this.receivedStock = event;
  }
}
