import { Component, Input } from '@angular/core';
import { ImportPrimeModuleModule } from '../import-prime-module/import-prime-module.module'
import { FormsModule } from '@angular/forms';

import { Client } from '../models/interfaces/client';

@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [
    ImportPrimeModuleModule,
    FormsModule
  ],
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.css'
})

export class ClientInfoComponent {
  @Input() client: Client = {};
}