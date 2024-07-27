import { Component, Input } from '@angular/core';
import { ImportPrimeModuleModule } from '../import-prime-module/import-prime-module.module'

import { SpinnerModalService } from '../services/spinner-modal.service';

@Component({
  selector: 'app-spinner-modal',
  standalone: true,
  imports: [ ImportPrimeModuleModule ],
  templateUrl: './spinner-modal.component.html',
  styleUrl: './spinner-modal.component.css'
})

export class SpinnerModalComponent {
  showSpinnerModal: boolean = false;

  constructor(private spinnerModalService: SpinnerModalService) { }

  ngOnInit() {
    this.spinnerModalService.currentState
      .subscribe(state => this.showSpinnerModal = state);
  }
}
