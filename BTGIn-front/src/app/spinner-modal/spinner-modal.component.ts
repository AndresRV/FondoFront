import { Component, Input } from '@angular/core';
import { ImportPrimeModuleModule } from '../import-prime-module/import-prime-module.module'

@Component({
  selector: 'app-spinner-modal',
  standalone: true,
  imports: [ ImportPrimeModuleModule ],
  templateUrl: './spinner-modal.component.html',
  styleUrl: './spinner-modal.component.css'
})

export class SpinnerModalComponent {
  @Input() showSpinnerModal: boolean = false;
}
