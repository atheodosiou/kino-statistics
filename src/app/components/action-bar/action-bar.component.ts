import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  constructor() { }

  @Input() rightActionLabel:string;
  @Input() leftActionLabel:string;
  
  ngOnInit() {
  }

}
