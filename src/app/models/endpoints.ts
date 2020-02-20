import { environment } from 'src/environments/environment';

export enum KinoEndpointEnums{
    STATS="api/kino/stats"
}

export class KinoEndpoints{
    public static getEndpoint(endpoint:KinoEndpointEnums):string{
       return `${environment.server_url}/${endpoint}`;
    }
}