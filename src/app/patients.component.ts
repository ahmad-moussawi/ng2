import { Component } from '@angular/core'
import { Patients } from './patients'

@Component({
  selector: 'patients',
  template: `
    <ul>
      <li *ngFor="let r of data">{{ r }}</li>
    </ul>
  `
})
export class PatientsComponent {

  data

  constructor(public patients: Patients) {

    this.patients.get().then(d => {
      // console.log(d);
      this.data = d
    })

  }
}
