import { Component, EventEmitter, Output, Input, SimpleChanges } from '@angular/core'

@Component({
  selector: 'patient-picker',
  template: `
      <p>
        {{ label }}
        <button class="btn btn-default"
           *ngFor="let c of users"
           [ngClass]="{'btn-primary': current === c}"
           (click)="onClick(c)">
             {{c}}
        </button>
      </p>
  `
})
export class PatientPicker {

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  current

  private _label;

  @Input()
  set label(val) {
    console.log('label is changed to: ' + val)
    this._label = val
  }

  get label() {
    return this._label
  }

  @Input()
  users: string[]

  @Output('change')
  changeEmitter: EventEmitter<any> = new EventEmitter();


  onClick(patient) {
    this.current = patient

    this.changeEmitter.emit(patient);

    console.log(patient)

  }


}
