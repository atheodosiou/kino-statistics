import { NgModule } from "@angular/core";
import { KinoTableModule } from './kino-table/kino-table.module';

@NgModule({
    imports:[KinoTableModule],
    exports:[KinoTableModule]
})
export class ComponentsModule{}