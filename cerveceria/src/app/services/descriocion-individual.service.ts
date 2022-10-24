import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescriocionIndividualService {

  @Output() envioDatoDesdePaksDescripion : EventEmitter<any> = new EventEmitter();

  constructor() { }
}
