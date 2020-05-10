import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {validFileExtension} from '../../core/tool/validFileExtension';
import {ApiService} from '../../core/service/api.service';
import {toFormData} from '../../core/tool/toFormData';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent {

  formGroup = new FormGroup({
    image: new FormControl(null, [Validators.required, validFileExtension()])
  });

  uploaded = false;
  gender: string;
  clothing: string;
  pose: string;

  warning: string;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private apiService: ApiService,
    public translate: TranslateService
  ) {
    this.getTranslation();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getTranslation();
    });
  }

  private getTranslation() {
    this.translate.get('WARN_FILL_ALL_FIELDS').subscribe((text: string) => {
      this.warning = text;
    });
  }

  submit() {
    if (this.gender == null || this.clothing == null || this.pose == null) {
      alert(this.warning);
      return;
    }
    this.apiService.saveReference(toFormData(this.formGroup.value), this.gender, this.clothing, this.pose)
      .then((query) => {
        query.subscribe(() => this.uploaded = true );
      });
  }

  onSelectGender(gender) {
    this.gender = gender;
  }

  onSelectClothing(clothing) {
    this.clothing = clothing;
  }

  onSelectPose(pose) {
    this.pose = pose;
  }

}
