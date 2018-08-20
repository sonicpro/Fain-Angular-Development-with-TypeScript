import { Component } from '@angular/core';
import {PriceQuote} from './iprice.quote';

@Component({
  selector: 'app-root',
  // Notice round brackers around "lastPrice" custom event defined in the child component.
  // Also notice that it is the child component that listens to the event produced by itself; no event bubbling used in EventEmitter-generated events.
  template: `
    AppComponent received: {{priceQuote?.stockSymbol}}
                           {{priceQuote?.lastPrice | currency:'USD'}}
   <price-quoter (lastPrice)="priceQuoteHandler($event)"></price-quoter>
    `
})
export class AppComponent {
  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    // "Unwraps" the lastPrice event payload.
    this.priceQuote = event;
  }
}
