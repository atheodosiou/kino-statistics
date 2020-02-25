import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { KinoService } from 'src/app/services/kino-service.service';
import { KinoDraw } from 'src/app/models/draw.model';
import { Col } from 'src/app/models/draw-col.interface';
import { LazyLoadEvent } from 'primeng/api/public_api';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'kino-table',
  templateUrl: './kino-table.component.html',
  styleUrls: ['./kino-table.component.scss']
})
export class KinoTableComponent implements OnInit, AfterViewInit {

  constructor(private kinoService: KinoService) { }

  @Input() rows: number = 5;
  totalRecords: number = 0;
  loading: boolean = false;
  selectedDraw:KinoDraw;
  
  kinoDraw: KinoDraw[];
  cols: Col[] = [
    { header: 'Κλήρωση', field: 'last.drawId', style: { width: '100px', "text-align": "center", "font-weight": "bold" } },
    { header: 'Ημερομηνία', field: 'last.drawTime', style: { width: '170px', "text-align": "center", "font-weight": "bold" } },
    { header: 'Αριθμοί Κλήρωσης', field: 'last.winningNumbers.list', style: { width: 'calc(100% - 370px)', color: 'yellow' } },
    { header: 'Bonus', field: 'last.drawId.winningNumbers.bonus', style: { width: '100px', "text-align": "center", "font-weight": "bold" } },
  ];

  ngOnInit() {
    // this.loadDataLazy(this.rows,0);
  }
  ngAfterViewInit() {
    this.loadDataLazy(this.rows, 0);
  }

  loadDrawsLazy(event: LazyLoadEvent) {
    this.loadDataLazy(event.rows, event.first);
  }

  private loadDataLazy(limit: number, offset: number) {
    if (offset !== 0) {
      this.loading = true;
    }
    this.kinoService.getDraws({ limit: limit, offset: offset }).subscribe((res: HttpResponse<any>) => {
      this.kinoDraw = res.body as KinoDraw[];
      this.totalRecords = parseInt(res.headers.get('X-Total-Count'));
      if (offset !== 0) {
        this.loading = false;
      }
    }, error => {
      console.error(error);
      if (offset !== 0) {
        this.loading = false;
      }
    });
  }
}
