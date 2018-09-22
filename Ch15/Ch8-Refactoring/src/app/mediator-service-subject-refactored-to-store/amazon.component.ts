import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State } from './istate';
import {getSearchQuery, getSearchResults} from './selectors';

@Component({
  selector: 'app-amazon',
  template: `<div class="amz">
              <h2 >Amazon component</h2>
              Search criteria: {{searchFor$ | async}}
              <ul>
                <li *ngFor="let p of searchResults$ | async">{{ p }}</li>
              </ul>
            </div>`,
  styles: ['.amz {background: pink}']
})
export class AmazonComponent {
  public searchFor$: Observable<string> = this.store.select(getSearchQuery);
  public searchResults$: Observable<string[]> = this.store.select(getSearchResults);

  constructor(private store: Store<State>){}
}
