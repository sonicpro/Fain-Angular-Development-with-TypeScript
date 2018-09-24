import { FormGroup } from "@angular/forms";

// "{ value }" expression destructures the function argument.
export function equalValidator({ value }: FormGroup): { [key:string]: any } | null {
    // Object.keys returns the FormGroup controls' name array.
    const [first, ...rest] = Object.keys(value);
    return rest.every(key => value[key] === value[first]) ? null : { "equal": true };
}