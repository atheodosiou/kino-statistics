import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KinoTableComponent } from './kino-table.component';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    PipesModule
  ],
  exports:[KinoTableComponent],
  declarations: [KinoTableComponent]
})
export class KinoTableModule { }
