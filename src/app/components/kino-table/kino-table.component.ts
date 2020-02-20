import { Component, OnInit } from '@angular/core';
import { KinoService } from 'src/app/services/kino-service.service';
import { KinoDraw } from 'src/app/models/draw.model';

@Component({
  selector: 'kino-table',
  templateUrl: './kino-table.component.html',
  styleUrls: ['./kino-table.component.scss']
})
export class KinoTableComponent implements OnInit {

  constructor(private kinoService:KinoService) { }
  kinoDraw:KinoDraw[];

  ngOnInit() {
    this.kinoService.getDraws({limit:10,offset:0}).subscribe(res=>{
      this.kinoDraw=res;    
      console.log(res);
    },error=>{
      console.error(error);
    });
  }

}
