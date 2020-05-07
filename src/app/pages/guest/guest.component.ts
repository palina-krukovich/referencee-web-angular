import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
})
export class GuestComponent {

  constructor(public translate: TranslateService) { }

}
