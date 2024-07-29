import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImportPrimeModuleModule } from '../import-prime-module/import-prime-module.module'
import { FormsModule } from '@angular/forms';

import { Fund } from '../models/interfaces/fund';
import { FundAction } from '../models/interfaces/fund-action';

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
  clientName: string = "uno";
  clientIdentification: number = 123;

  fundNameForInscription?: string;
  inscriptionCapital?: number;
  showModalInscriptionCapital: boolean = false;
  errorInscriptionCapital: boolean = false;

  @Input() funds: Fund[] = [];
  @Input() isCancelable: boolean = false;
  @Output() disenrollmentFundEmit: EventEmitter<FundAction> = new EventEmitter<FundAction>();
  @Output() inscriptionFundEmit: EventEmitter<FundAction> = new EventEmitter<FundAction>();

  disenrollmentFund(fundNameEmit: string | undefined): void {
    let fundAction: FundAction = {
      clientIdentification: this.clientIdentification,
      fundName: fundNameEmit
    };

    this.disenrollmentFundEmit.emit(fundAction);
  }  

  inscriptionFund(fundNameEmit: string | undefined): void {
    this.fundNameForInscription = fundNameEmit;
    this.showModalInscriptionCapital = true;
  } 

  save() {
    this.errorInscriptionCapital = false;

    if(!this.inscriptionCapital) {
      this.errorInscriptionCapital = true;
    } else {
      let fundAction: FundAction = {
        clientName: this.clientName,
        clientIdentification: this.clientIdentification,
        fundName: this.fundNameForInscription,
        inscriptionCapital: this.inscriptionCapital
      };
      this.showModalInscriptionCapital = false;
      this.inscriptionFundEmit.emit(fundAction);
    }
  }
}