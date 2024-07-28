import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ImportPrimeModuleModule } from './import-prime-module/import-prime-module.module'
import { SpinnerModalComponent } from './spinner-modal/spinner-modal.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { FundComponent } from './fund/fund.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ClientPortfolio } from './models/interfaces/client-portfolio';
import { ClientTransactionsService } from './services/client-transactions.service';
import { FundAction } from './models/interfaces/fund-action';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ImportPrimeModuleModule,
    SpinnerModalComponent,
    FormsModule,
    CommonModule,
    ClientInfoComponent,
    FundComponent,
    TransactionHistoryComponent
  ],
  providers: [
    ConfirmationService
  ],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  clientIdentification: number = 123;
  clientPortfolio: ClientPortfolio = {
    client: {},
    transactionHistory: [],
    fundsAvailable: [],
    registeredFunds: []
  };
  showSpinnerModal: boolean = false;


  constructor(
    private confirmationService: ConfirmationService,
    private clientTransactionsService: ClientTransactionsService) { }

  ngOnInit(): void {
    this.getClientPortfolio();
  }

  changeStateSpinnerModal(state: boolean): void {
    this.showSpinnerModal = state;
  }

  getClientPortfolio(): void {
    this.changeStateSpinnerModal(true);
    
    this.clientTransactionsService.getTransactionsHistory(this.clientIdentification)
    .subscribe({
      next: clientPortfolio => this.setClientPortfolio(clientPortfolio),
      error: () => this.errorEvents()
    });    
  }

  private setClientPortfolio(clientPortfolio: ClientPortfolio): void {
    this.clientPortfolio = clientPortfolio;
    this.changeStateSpinnerModal(false);
  }
  
  private errorEvents(): void {
    this.changeStateSpinnerModal(false);
    this.confirmationService.confirm({
      key: 'textDialog',
      message: 'Ha ocurrido un error, vuelve a intentarlo en unos segundos',
      header: 'Error',
      icon: 'pi pi-times-circle',
      acceptLabel: 'Entendido',
      rejectVisible: false
    });
  }
  
  disenrollmentFund(fundNameEmit: string): void {
    this.changeStateSpinnerModal(true);
    let fundAction: FundAction = {
      clientIdentification: this.clientIdentification,
      fundName: fundNameEmit
    };

    this.clientTransactionsService.fundDisenrollment(fundAction)
    .subscribe({
      next: () => this.successFundDisenrollment(),
      error: error => this.errorFundDisenrollment(error.message)
    });
  }

  private successFundDisenrollment() : void {
    this.changeStateSpinnerModal(false);
    this.getClientPortfolio();
  }

  private errorFundDisenrollment(error: string): void {
    this.changeStateSpinnerModal(false);
    this.confirmationService.confirm({
      key: 'textDialog',
      message: error,
      header: 'Error',
      icon: 'pi pi-times-circle',
      acceptLabel: 'Entendido',
      rejectVisible: false
    });
  }  
}