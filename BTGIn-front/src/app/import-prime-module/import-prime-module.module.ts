import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    CardModule,
    MessagesModule,
    StepsModule,
    ProgressBarModule,
    ToastModule,
    BadgeModule,
    FloatLabelModule,
    DropdownModule,
    InputNumberModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    DialogModule,
    TableModule,
    DataViewModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    CardModule,
    MessagesModule,
    StepsModule,
    ProgressBarModule,
    ToastModule,
    BadgeModule,
    FloatLabelModule,
    DropdownModule,
    InputNumberModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    DialogModule,
    DataViewModule,
    TableModule
  ]
})

export class ImportPrimeModuleModule { }
