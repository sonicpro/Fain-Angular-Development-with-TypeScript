import {Component} from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./istate";
import { getSearchQuery, getSearchResults } from './selectors';

@Component({
  selector: 'app-ebay',
  // async pipe auto-subscribes to the Observable store slice. No need to use subsccribe / unsubscribe.
  template: `
    <div class="ebay">
      <h2>eBay component</h2>
      Search criteria: {{searchFor$ | async}}
      <ul>
        <li *ngFor="let p of searchResults$ | async">{{ p }}</li>
      </ul>
    </div>`,
  styles: ['.ebay {background: cyan}']
})
export class EbayComponent {

  public searchFor$ = this.store.select(getSearchQuery);

  public searchResults$ = this.store.select(getSearchResults);

  constructor(private store: Store<State>) {
  }
}
