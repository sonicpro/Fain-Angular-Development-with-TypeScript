import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Observable, of } from "rxjs";

@Injectable()
export class SsnValidatorService {
    public checkWorkAuthorization(field: AbstractControl): Observable<{[key: string]: any} | null> {
        return of(field.value.indexOf("123") > -1 ? null : {"work": "You're not authorized to work"});
    }
}