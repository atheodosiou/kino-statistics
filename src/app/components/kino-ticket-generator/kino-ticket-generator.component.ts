import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'ticket-generator',
  templateUrl: './kino-ticket-generator.component.html',
  styleUrls: ['./kino-ticket-generator.component.scss']
})
export class KinoTicketGeneratorComponent implements OnInit {

  constructor() { }
  generationTypes:SelectItem[]=[
    {label:'Τυχαία επιλογή',value:'random'},
    {label:'Συχνότερα',value:'mostFrequent'},
    {label:'Λογότερο Συχνά',value:'lessFrequent'}
  ];
  generationType:SelectItem;
  kionbonus:boolean=true;
  ngOnInit() {
  }

  
}
