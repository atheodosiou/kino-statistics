import { Component, OnInit, Input } from '@angular/core';
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
export class KinoTableComponent implements OnInit {

  constructor(private kinoService:KinoService) { }

  @Input() rows:number=5;
  totalRecords:number=0;
  loading:boolean=false;

  kinoDraw:KinoDraw[];
  cols:Col[]=[
    {header:'Κλήρωση',field:'last.drawId',style:{width:'100px'}},
    {header:'Ημερομηνία',field:'last.drawTime',style:{width:'170px'}},
    {header:'Αριθμοί Κλήρωσης',field:'last.winningNumbers.list',style:{width:'calc(100% - 300px)',color:'yellow'}},
    {header:'Bonus',field:'last.drawId.winningNumbers.bonus',style:{width:'100px'}},
  ];

  ngOnInit() {
    
  }

  loadDrawsLazy(event:LazyLoadEvent){
    console.log(event);
    this.loading=true;
    this.kinoService.getDraws({limit:event.rows,offset:event.first}).subscribe((res:HttpResponse<any>)=>{
      // console.log(res.headers.keys())
      this.kinoDraw=res.body as KinoDraw[];
      this.totalRecords = parseInt(res.headers.get('X-Total-Count'));
      // console.log(res.body,res.headers);
      // this.loading=false;
    },error=>{
      console.error(error);
      this.loading=false;
    });
  }
}
