import { Component, Input } from '@angular/core';
import { ImportPrimeModuleModule } from '../import-prime-module/import-prime-module.module'
import { FormsModule } from '@angular/forms';

import { Fund } from '../models/interfaces/fund';

@Component({
  selector: 'app-fund',
  standalone: true,
  imports: [
    ImportPrimeModuleModule,
    FormsModule
  ],
  templateUrl: './fund.component.html',
  styleUrl: './fund.component.css'
})

export class FundComponent {
  @Input() funds: Fund[] = [];
  @Input() isCancelable: boolean = false;
}
