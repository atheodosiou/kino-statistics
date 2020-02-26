import { NgModule } from "@angular/core";
import { ToDatePipe } from './date.pipe';
import { EvenOddPipe } from './evenOdd.pipe';

@NgModule({
   declarations: [
      ToDatePipe,
      EvenOddPipe
   ],
   exports: [
      ToDatePipe,
      EvenOddPipe
   ]
})
export class PipesModule{}