import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { SelectItem } from "primeng/api/selectitem";
import {
  NumberOccurrence,
  KinobonusOccurrence,
  NumberOcc,
  KinobonusOcc
} from "src/app/models/occcurrences.interface";
export enum GenerationType {
  MOST_FREQUENT = "MOST_FREQUENT",
  LESS_FREQUENT = "LESS_FREQUENT",
  RANDOM = "RANDOM"
}
export interface Ticket{
  numbers:number[];
  kinobonus?:number;
}

@Component({
  selector: "ticket-generator",
  templateUrl: "./kino-ticket-generator.component.html",
  styleUrls: ["./kino-ticket-generator.component.scss"]
})
export class KinoTicketGeneratorComponent implements OnInit {
  constructor() {}

  generationTypes: SelectItem[] = [
    { label: "Τυχαία επιλογή", value: GenerationType.RANDOM },
    { label: "Συχνότερα", value: GenerationType.MOST_FREQUENT },
    { label: "Λογότερο Συχνά", value: GenerationType.LESS_FREQUENT }
  ];
  generationType: SelectItem;
  kionbonus: boolean = true;
  totalNumbers: number=null;

  _numberOccurences: NumberOcc[];
  _kinobonusOccurences: KinobonusOcc[];
  _order: "ASC" | "DESC" = "ASC";

  @Input() set numberOccurences(value: NumberOccurrence) {
    if (!value && !this._order) return;
    this._numberOccurences = this.sortOccurences(value, this._order);
    console.log("numberOccurences", this._order, this._numberOccurences);
  }

  @Input() set kinobonusOccurences(value: KinobonusOccurrence) {
    if (!value && !this._order) return;
    this._kinobonusOccurences = this.sortOccurences(value, this._order);
    console.log("kinobonusOccurences", this._order, this._kinobonusOccurences);
  }

  ngOnInit() {}

  generate() {   
    switch (this.generationType.value) {
      case GenerationType.RANDOM: {
        console.log(this.getRandomTicket(this.totalNumbers));
        break;
      }
      case GenerationType.MOST_FREQUENT: {
        console.log(this.generationType.value)
        break;
      }
      case GenerationType.LESS_FREQUENT: {
        console.log(this.generationType.value)
        break;
      }
    }
  }

  private sortOccurences(array: any, order: "ASC" | "DESC") {
    if (!array) return;
    switch (this._order) {
      case "ASC": {
        return array.occurences.sort((a, b) => {
          return a.count - b.count;
        });
      }
      case "DESC": {
        return array.occurences.sort((a, b) => {
          return b.count - a.count;
        });
      }
      default: {
        return array.occurences;
      }
    }
  }

  private getRandomInt():number{
    //Get a random int between 1 and 80
    return Math.floor(Math.random() * (80 - 1) + 1);
  }

  private getRandomTicket(totalNumbers:number):Ticket{
    const ticket:Ticket={numbers:[]};
    for(let i=0; i<totalNumbers; i++){
      ticket.numbers.push(this.getRandomInt());
    }
    if(this.kionbonus){
      ticket.kinobonus=this.getRandomInt();
    }
    return ticket;
  }
}
