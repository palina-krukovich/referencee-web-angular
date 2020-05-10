import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileComponent,
      multi: true
    }
  ]
})
export class FileComponent implements ControlValueAccessor{

  onChange: Function;
  file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  constructor(
    private host: ElementRef<HTMLInputElement>,
    public translate: TranslateService
  ) { }

  writeValue( value: null ) {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }
}
