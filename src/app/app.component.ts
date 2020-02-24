import { Component, OnInit } from '@angular/core';
import { KinoService } from './services/kino-service.service';
import { NumberOccurrence } from './models/occcurrences.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kino-statistics';
  constructor(private kinoService:KinoService){}
  ngOnInit(){
    this.kinoService.getNumberOccurrences().subscribe(res=>{
      console.log(res.body as NumberOccurrence);
    },error=>{
      console.log(error);
    });
  }
}
