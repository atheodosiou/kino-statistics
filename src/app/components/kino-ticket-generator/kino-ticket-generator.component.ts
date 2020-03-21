import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
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
export interface Ticket {
  numbers: number[];
  kinobonus?: number;
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
  totalNumbers: number = null;

  _numberOccurences: NumberOcc[];
  _kinobonusOccurences: KinobonusOcc[];
  _order: "ASC" | "DESC" = "ASC";

  @Output() onGenerate: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Input() set numberOccurences(value: NumberOccurrence) {
    if (!value) return;
    this._numberOccurences = value.occurences;
  }

  @Input() set kinobonusOccurences(value: KinobonusOccurrence) {
    if (!value) return;
    this._kinobonusOccurences = value.occurences;
  }

  ngOnInit() {}

  generate() {
    switch (this.generationType.value) {
      case GenerationType.RANDOM: {
        this.onGenerate.emit(this.getRandomTicket());
        break;
      }
      case GenerationType.MOST_FREQUENT: {
        this.onGenerate.emit(this.getTicket("DESC"));
        break;
      }
      case GenerationType.LESS_FREQUENT: {
        this.onGenerate.emit(this.getTicket("ASC"));
        break;
      }
    }
  }

  private sortOccurences(array: any[], order: "ASC" | "DESC") {
    if (!array) return;
    switch (order) {
      case "ASC": {
        return array.sort((a, b) => {
          return a.count - b.count;
        });
      }
      case "DESC": {
        return array.sort((a, b) => {
          return b.count - a.count;
        });
      }
      default: {
        return array;
      }
    }
  }

  private getRandomInt(): number {
    //Get a random int between 1 and 80
    return Math.floor(Math.random() * (80 - 1) + 1);
  }

  private getRandomTicket(): Ticket {
    const ticket: Ticket = { numbers: [] };
    for (let i = 0; i < this.totalNumbers; i++) {
      ticket.numbers.push(this.getRandomInt());
    }
    if (this.kionbonus) {
      ticket.kinobonus=ticket.numbers[Math.floor(Math.random()*(ticket.numbers.length - 1)+1)];
    }
    return ticket;
  }

  getTicket(order: "ASC" | "DESC"): Ticket {
    const ticket: Ticket = { numbers: [] };
    const occurences = this.sortOccurences(
      this._numberOccurences,
      order
    ) as NumberOcc[];
    for (let i = 0; i < this.totalNumbers; i++) {
      ticket.numbers.push(occurences[i].number);
    }
    if (this.kionbonus) {
      switch (order) {
        case "ASC": {
          ticket.kinobonus = Math.min(...ticket.numbers);
          break;
        }
        case "DESC": {
          ticket.kinobonus = Math.max(...ticket.numbers);
          break;
        }
      }
    }
    return ticket;
  }
}
