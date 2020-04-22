import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestComponent} from './pages/guest/guest.component';
import {GuestGuard} from './core/guard/guest.guard';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {AuthGuard} from './core/guard/auth.guard';
import {DrawComponent} from './pages/draw/draw.component';
import {UploadComponent} from './pages/upload/upload.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AdminGuard} from './core/guard/admin.guard';


const routes: Routes = [
  { path: '', redirectTo: '/guest', pathMatch: 'full' },
  { path: 'guest', component: GuestComponent, canActivate: [GuestGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'draw', component: DrawComponent, canActivate: [AuthGuard] },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
