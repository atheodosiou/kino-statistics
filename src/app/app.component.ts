import { Component, OnInit } from '@angular/core';
import { KinoService } from './services/kino-service.service';
import { NumberOccurrence } from './models/occcurrences.interface';
import { ChartTypeEnum } from './components/charts/chart-options';

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
  private totalDraws: number;

  constructor(private kinoService: KinoService) { }
  ngOnInit() {
    this.kinoService.getTotalNumberOfDraws().subscribe(res => {
      this.totalDraws = res.totalDraws;
      this.centerActionLabel=`Ανάληση ${res.totalDraws} κληρώσεων`;
    }, error => {
      console.log(error);
    });
  }
}
