import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'validate',
  pure: false
})
export class ValidatePipe implements PipeTransform {
  transform(value: FormControl): any {
    return {
      'is-valid': value.touched && value.valid,
      'is-invalid' :  value.touched && value.invalid
    }
  }
}
