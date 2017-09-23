import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Dentiflow project</h1>

    <div class="form-group">
      <label for="">Patient</label>

      <pre>{{ message }}</pre>

      <button (click)="message = m" *ngFor="let m of messages">{{m}}</button>

      <message-day [(ngModel)]="message"></message-day>

      <patients></patients>

      <!--
      <patient-picker [label]="label" [users]="myUsers" (change)="onChange($event)"></patient-picker>


      <strong>Selected patient is: {{ selected }}</strong>

      <button (click)="addPatient()">add</button>
      -->
    </div>
  `,
})
export class AppComponent {

  message = 'نازلين على وكر النحل نقطف عسل';

  messages = ['a', 'b', 'c']

  label = this.messages[0];

  selected

  title = 'app'

  myUsers = [
    'fadi',
    'mirna'
  ]

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.label = this.messages[2];
    }, 1400)

    setTimeout(() => {
      this.label = this.messages[1];
    }, 2400)
  }

  onChange(patient) {
    console.log('patient changed: '  + patient )
    this.selected = patient;
    this.label = this.messages[0];
  }

  addPatient() {
    this.myUsers.push('salim');
  }

}
