import { Component, OnInit } from '@angular/core';
import { KinoService } from './services/kino-service.service';
import { NumberOccurrence, KinobonusOccurrence } from './models/occcurrences.interface';
import { ChartTypeEnum } from './components/charts/chart-options';
import { Ticket } from './components/kino-ticket-generator/kino-ticket-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kino-statistics';
  rightActionLabel: string='Συχνότητα εμφάνησης Kinobonus';
  leftActionLabel: string='Συχνότητα εμφάνησης αριθμού'
  centerActionLabel:string;
  loading:boolean=true;
  generatorLabel:string='Δημιουργία δελτίου'

  numbers:NumberOccurrence;
  kinobonus:KinobonusOccurrence;
  ticket:Ticket;
  private totalDraws: number;

  constructor(private kinoService: KinoService) { }
  ngOnInit() {
    this.kinoService.getTotalNumberOfDraws().subscribe(res => {
      this.totalDraws = res.totalDraws;
      this.centerActionLabel=`Ανάληση ${res.totalDraws} κληρώσεων`;
      setTimeout(() => {
        this.loading=false;
      }, 1000);
    }, error => {
      console.log(error);
    });
  }
}
