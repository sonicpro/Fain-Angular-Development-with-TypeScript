import {Component} from '@angular/core';
import {StateService} from "./state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'product',
  // async pipe auto-subscribes to the Observable fiels. No need to use subsccribe / unsubscribe (see amazon.component.ts for the comparison).
  template: `
    <div class="ebay">
      <h2>eBay component</h2>
      Search criteria: {{searchFor$ | async}}
    </div>`,
  styles: ['.ebay {background: cyan}']
})
export class EbayComponent {

  searchFor$: Observable<string>;

  constructor(private state: StateService) {
    this.searchFor$ = state.getState();
  }
}
