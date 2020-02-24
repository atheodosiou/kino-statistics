import { environment } from 'src/environments/environment';

export enum KinoEndpointEnums{
    STATS="api/kino/stats",
    NUMBER_OCCURRENCES="api/kino/stats/number-occurrences",
    KINOBONUS_OCCURRENCES="api/kino/stats/kino-bonus-occurrences"
}

export class KinoEndpoints{
    public static getEndpoint(endpoint:KinoEndpointEnums):string{
       return `${environment.server_url}/${endpoint}`;
    }
}