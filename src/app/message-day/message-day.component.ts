import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'message-day',
  template: `
    <div class="form-group">
      <label for="">Prefix</label>
      <input #prefix class="form-control" type="text">
    </div>
    <input #messageRef class="form-control" type="text" [value]="message" (change)="onChange(messageRef.value, prefix.value)">
  `
})
export class MessageDay {

  @Input('ngModel') message
  @Output('ngModelChange') messageChange = new EventEmitter()


  onChange(value, prefix) {
    this.messageChange.emit(prefix + ' ' + value);
  }

}
