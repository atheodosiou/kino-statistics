import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../kino-ticket-generator/kino-ticket-generator.component';

@Component({
  selector: 'ticket-results',
  templateUrl: './ticket-results.component.html',
  styleUrls: ['./ticket-results.component.scss']
})
export class TicketResultsComponent implements OnInit {

  constructor() { }
  data:Ticket;
  
  @Input() set ticket(value:Ticket){
    this.data=value;
  }

  ngOnInit() {
  }

}
