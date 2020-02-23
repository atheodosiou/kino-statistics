export interface KinoDraw{
    _id:string;
    last:Last;
}

interface Last{
    drawId:number;
    drawTime:number;
    winningNumbers:WinningNumber[];

}

interface WinningNumber{
    list:number[];
    bonus:number[]
}