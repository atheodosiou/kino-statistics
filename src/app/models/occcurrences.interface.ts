export interface NumberOccurrence{
    drawCount:number;
    occurences:Occurence[];
}

interface Occurence{    
    number:number;
    count:number;
    percentage:number;
}