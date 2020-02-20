export interface KinoDraw{
    _id:string;
    last:Last;
}

interface Last{
    winningNumbers:WinningNumber[];
}

interface WinningNumber{
    list:number[];
    bonus:number[]
}