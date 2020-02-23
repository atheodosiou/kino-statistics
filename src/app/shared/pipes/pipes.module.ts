import { NgModule } from "@angular/core";
import { ToDatePipe } from './date.pipe';

@NgModule({
   declarations: [
      ToDatePipe
   ],
   exports: [
      ToDatePipe
   ]
})
export class PipesModule{}