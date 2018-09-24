import { FormControl } from "@angular/forms";

export function ssnValidator(c: FormControl) : { [key: string]: any } | null {
    const regEx = /^\d{9}$/;
    const value = c.value || "";
    return value.match(regEx) ? null : {
        ssn: {
            description: "SSN is invalid"
        }
    };
}