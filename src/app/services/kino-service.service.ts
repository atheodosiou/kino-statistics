import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrawSearchBody } from '../models/draw-search-body.model';
import { environment } from 'src/environments/environment';
import { KinoEndpoints, KinoEndpointEnums } from '../models/endpoints';
import { KinoDraw } from '../models/draw.model';
import { NumberOccurrence } from '../models/occcurrences.interface';
@Injectable({
  providedIn: 'root'
})
export class KinoService {

  constructor(private http: HttpClient) { }

  getDraws(body: DrawSearchBody): Observable<any> {
    console.log(KinoEndpoints.getEndpoint(KinoEndpointEnums.STATS));
    return this.http.post(KinoEndpoints.getEndpoint(KinoEndpointEnums.STATS), body,{ observe: 'response' });
  }

  getNumberOccurrences():Observable<any>{
    console.log(KinoEndpoints.getEndpoint(KinoEndpointEnums.NUMBER_OCCURRENCES))
    return this.http.get(KinoEndpoints.getEndpoint(KinoEndpointEnums.NUMBER_OCCURRENCES),{observe:'response'});
  }

  getKinobonusOccurrences():Observable<any>{
    console.log(KinoEndpoints.getEndpoint(KinoEndpointEnums.KINOBONUS_OCCURRENCES))
    return this.http.get(KinoEndpoints.getEndpoint(KinoEndpointEnums.KINOBONUS_OCCURRENCES),{observe:'response'});
  }

  getTotalNumberOfDraws():Observable<any>{
    console.log(KinoEndpoints.getEndpoint(KinoEndpointEnums.TOTAL_DRAWS))
    return this.http.get(KinoEndpoints.getEndpoint(KinoEndpointEnums.TOTAL_DRAWS));
  }
}
