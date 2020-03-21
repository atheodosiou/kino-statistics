import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KinoTicketGeneratorComponent } from './kino-ticket-generator.component';
import { FormsModule } from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {SpinnerModule} from 'primeng/spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    PanelModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    SpinnerModule
  ],
  exports:[KinoTicketGeneratorComponent],
  declarations: [KinoTicketGeneratorComponent]
})
export class KinoTicketGeneratorModule { }
