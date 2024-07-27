import { Component, Input } from '@angular/core';
import { ImportPrimeModuleModule } from '../import-prime-module/import-prime-module.module'
import { FormsModule } from '@angular/forms';

import { TransactionHistory } from '../models/interfaces/transaction-history';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [
    ImportPrimeModuleModule,
    FormsModule
  ],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent {
  @Input() transactionHistory: TransactionHistory[] = [];
}