import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

const colors: any = {
  blue: {
    primary: '#1F9BCF',
    secondary: '#c0e3f2',
  },
  yellow: {
    primary: '#f0ad4e',
    secondary: '#f7d4a3',
  },
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Time mode: 30 minutes',
      color: colors.yellow,
      start: new Date('2020-04-21'),
    },
    {
      title: 'Class mode: 60 minutes',
      color: colors.blue,
      start: new Date(),
    },
  ];

}
