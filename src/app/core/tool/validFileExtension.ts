import {FormControl} from '@angular/forms';

const separator = '.';

export function validFileExtension() {
  return (control: FormControl) => {
    const file = control.value;
    if (file) {
      const extension = file.name.split(separator)[1].toLowerCase();
      if ('png' !== extension.toLowerCase() && 'jpg' !== extension.toLowerCase() && 'jpeg' !== extension.toLowerCase()) {
        return {
          validFileExtension: true
        };
      }
      return null;
    }

    return null;
  };
}
