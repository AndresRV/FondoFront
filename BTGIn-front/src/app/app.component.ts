import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ImportPrimeModuleModule } from './import-prime-module/import-prime-module.module'
import { SpinnerModalComponent } from './spinner-modal/spinner-modal.component';

import { ClientPortfolio } from './models/interfaces/client-portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ImportPrimeModuleModule,
    SpinnerModalComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  clientPortfolio: ClientPortfolio = {
    client: {},
    transactionHistory: []
  };

  ngOnInit(): void {
    this.getClientPortfolio();
  }

  getClientPortfolio(): void {
    this.clientPortfolio = {
      client: {
          name: 'John Doe',
          identification: 123456,
          cash: 1000.50,
          countRegisteredFunds: 5
      },
      transactionHistory: [
        {
          type: 'ingreso',
          amount: 123,
          date: new Date(),
          isAcepted: true
        },
        {
          type: 'RETIRO',
          amount: 12354,
          date: new Date(),
          isAcepted: false
        }        
      ],
      fundsAvailable:[
        {
          name: 'disponible',
          minimumRegistrationAmount: 123,
          category: 'fun'
        },
        {
          name: 'disponible2',
          minimumRegistrationAmount: 12322,
          category: 'fun3'
        },
        {
          name: 'disponible3',
          minimumRegistrationAmount: 12321,
          category: 'fun1'
        }
      ],
      registeredFunds: [
        {
          name: 'registrado',
          minimumRegistrationAmount: 123,
          registredAmount: 456,
          category: 'fui'
        }
      ]
    }

    /*this.changeStateSpinnerModal(true);
    
    this.eventService.getEventsInfo()
    .subscribe({
      next: events => this.setEvents(events),
      error: () => this.errorEvents()
    });*/
  }
}