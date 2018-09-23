import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ssnValidator(c: AbstractControl) : ValidationErrors | null {
    const regEx = /^\d{9}$/;
    const value = c.value || "";
    return value.match(regEx) ? null : {
        ssn: {
            description: "SSN is invalid"
        }
    };
}