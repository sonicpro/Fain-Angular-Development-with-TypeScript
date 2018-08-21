import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { SEARCH, SearchAction, SearchSuccessAction } from "./actions";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

// Provides an effect. Not injected explicitly in any class, only registered for Root in app.module.ts.
@Injectable()
export class SearchEffects {
    constructor(private actions$: Actions,
        private productService: ProductService) {}

    // Transform payload from the actions$ observable and pass them to the loadProducts$ effect.
    @Effect()
    public loadProducts$: Observable<SearchSuccessAction> = this.actions$
        .ofType(SEARCH) // Run only if the action is dispatched from SearchService.
        .pipe(
            map((action: SearchAction) => action.payload),
            switchMap(({ searchQuery }) => this.productService.getProducts(searchQuery)), // Cancel the getting in new search action arrival.
            map(searchResults => new SearchSuccessAction({searchResults})) // Using ES6 object literal property value shorthand.
        );
}