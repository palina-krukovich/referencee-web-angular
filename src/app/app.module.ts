import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestComponent } from './pages/guest/guest.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DrawComponent } from './pages/draw/draw.component';
import { UploadComponent } from './pages/upload/upload.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { AuthComponent } from './pages/components/auth/auth.component';
import { FileComponent } from './pages/components/file/file.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SelectPictureComponent } from './pages/components/select-picture/select-picture.component';
import { UpdateProfileModalComponent } from './pages/components/update-profile-modal/update-profile-modal.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GalleryComponent } from './pages/gallery/gallery.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    CalendarComponent,
    DrawComponent,
    UploadComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    AuthComponent,
    FileComponent,
    SelectPictureComponent,
    UpdateProfileModalComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
