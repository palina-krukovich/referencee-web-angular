import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

const blue = { primary: '#1F9BCF', secondary: '#c0e3f2' };

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit{
  class: string;
  classes: string;
  time: string;
  hour: string;
  minute: string;

  viewDate: Date = new Date();
  events: CalendarEvent[];

  constructor(public translate: TranslateService) {
    this.getTranslatedConstraints();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getTranslatedConstraints();
    });
  }

  ngOnInit(): void {
    // TODO: update translation
    this.events = [
      {
        title: this.class + ': ' + '30' + this.minute,
        color: blue,
        start: new Date(),
      }
    ];
  }

  getTranslatedConstraints() {
    this.translate.get('CLASS').subscribe((text: string) => {
      this.class = text;
    });
    this.translate.get('CLASSES').subscribe((text: string) => {
      this.classes = text;
    });
    this.translate.get('TIME').subscribe((text: string) => {
      this.time = text;
    });
    this.translate.get('HOUR').subscribe((text: string) => {
      this.hour = text;
    });
    this.translate.get('MINUTE').subscribe((text: string) => {
      this.minute = text;
    });
  }

}
