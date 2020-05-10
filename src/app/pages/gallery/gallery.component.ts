import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../core/service/api.service';
import {Reference} from '../../core/model/reference';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {newArray} from '@angular/compiler/src/util';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit, OnDestroy{

  references: Reference[] = new Array<Reference>();

  constructor(
    private apiService: ApiService,
    private router: Router,
    public translate: TranslateService,
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getReferences();
    }, 1000);
  }

  ngOnDestroy(): void {

  }

  private getReferences() {
    this.apiService.findReferenceByUser().then((query) => {
      query.subscribe((objects) => {
        this.references = objects;
      });
    });
  }

}
