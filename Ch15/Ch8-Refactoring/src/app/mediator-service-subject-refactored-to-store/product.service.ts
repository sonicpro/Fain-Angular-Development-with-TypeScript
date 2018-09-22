// Emulates network call to retrieve products.
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    static counter = 0;

    // Return five products appended with the searchQueryString and squential numbers.
    public getProducts(searchQuery: string): Observable<string[]> {
        const productGenerator = () => `Product ${searchQuery}${ProductService.counter++}`;

        const products = Array.from({length: 5}, productGenerator);
        return of(products).pipe(
            delay(1000)
        );
    }
}