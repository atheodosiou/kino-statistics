export interface NumberOccurrence{
    drawCount:number;
    occurences:NumberOcc[];
}
export interface KinobonusOccurrence{
    drawCount:number;
    occurences:KinobonusOcc[];
}

export interface NumberOcc{    
    number:number;
    count:number;
    percentage:number;
}

export interface KinobonusOcc{    
    kinobonus:number;
    count:number;
    percentage:number;
}