import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class Patients {

  constructor(http: Http) {

  }

  get() {
    return Promise.resolve([
      'a',
      'b',
      'c'
    ])
  }

  find(id) {

  }

  save(patient) {

  }

  delete(id) {

  }

}
