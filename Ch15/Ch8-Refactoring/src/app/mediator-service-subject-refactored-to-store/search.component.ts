import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Store } from "@ngrx/store";
import { debounceTime, tap } from "rxjs/operators";
import { SearchAction } from './actions';

@Component({
  selector: "app-search",
  template: `
      <input type="text" placeholder="Enter product" [formControl]="searchInput"/>
    `,
  styles: [".main {background: yellow}"]
})

export class SearchComponent {

  searchInput: FormControl;

  constructor(private store: Store<any>){
    this.searchInput = new FormControl('');

    // Subscribing to valueChanges observable of the FormInput and passing the value to the Store.dispatch().
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      tap(value => console.log(`The user entered ${value}`))
    )
    .subscribe(searchValue =>
      {
        this.store.dispatch(new SearchAction({
          searchQuery: searchValue,
        }));
      });
  }
}
