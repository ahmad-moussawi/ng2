import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component'
import { PatientPicker } from './patient-picker/patient-picker.component'
import { MessageDay } from './message-day/message-day.component';
import { PatientsComponent } from './patients.component';
import { Patients } from './patients';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientPicker,
    MessageDay,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    Patients,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
