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
  value: NumberOcc[];
  kinobonus?: NumberOcc;
  description?: string;
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
    { label: "Συχνά εμφανιζόμενα", value: GenerationType.MOST_FREQUENT },
    { label: "Σπάνια εμφανιζόμενα", value: GenerationType.LESS_FREQUENT }
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
        this.onGenerate.emit(this.getTicket());
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

  getTicket(order?: "ASC" | "DESC"): Ticket {
    const ticket: Ticket = { value: [] };
    if (order) {
      const occurences = this.sortOccurences(
        this._numberOccurences,
        order
      ) as NumberOcc[];
      for (let i = 0; i < this.totalNumbers; i++) {
        ticket.value.push(occurences[i]);
      }
    } else {
      for (let i = 0; i < this.totalNumbers; i++) {
        ticket.value.push(
          this._numberOccurences[
            Math.floor(Math.random() * this._numberOccurences.length)
          ]
        );
      }
    }
    if (this.kionbonus) {
      ticket.kinobonus =
        ticket.value[Math.floor(Math.random() * ticket.value.length)];
    }
    ticket.description=this.getDescription();
    return ticket;
  }

  private getDescription(): string {
    let description: string = "";
    let type: string = "";
    switch (this.generationType.value) {
      case GenerationType.RANDOM: {
        type = "τυχαία";
        break;
      }
      case GenerationType.MOST_FREQUENT: {
        type = "συχνά εμφανιζόμενα";
        break;
      }
      case GenerationType.LESS_FREQUENT: {
        type = "σπάνια εμφανιζόμενα";
        break;
      }
    }
    description = `Δελτίο: ${this.totalNumbers} ${type} νούμερα`;
    if (this.kionbonus) {
      description += " με KINOBONUS";
    }
    return description;
  }
}
