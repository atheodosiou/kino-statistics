export interface NumberOccurrence{
    drawCount:number;
    occurences:NumberOccurence[];
}
export interface KinobonusOccurrence{
    drawCount:number;
    occurences:KinobonusOccurence[];
}

interface NumberOccurence{    
    number:number;
    count:number;
    percentage:number;
}

interface KinobonusOccurence{    
    kinobonus:number;
    count:number;
    percentage:number;
}