import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KinoTableComponent } from './kino-table.component';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ],
  exports:[KinoTableComponent],
  declarations: [KinoTableComponent]
})
export class KinoTableModule { }
