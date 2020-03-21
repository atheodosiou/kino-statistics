import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketResultsComponent } from './ticket-results.component';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule
  ],
  exports:[TicketResultsComponent],
  declarations: [TicketResultsComponent]
})
export class TicketResultsModule { }
