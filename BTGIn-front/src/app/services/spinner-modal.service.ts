import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpinnerModalService {
  private activateSpinnerModal = new Subject<boolean>();
  currentState = this.activateSpinnerModal.asObservable();

  changeState(state: boolean) {
    this.activateSpinnerModal.next(state);
  }
}
