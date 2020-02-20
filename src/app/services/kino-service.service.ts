import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrawSearchBody } from '../models/draw-search-body.model';
import { environment } from 'src/environments/environment';
import { KinoEndpoints, KinoEndpointEnums } from '../models/endpoints';
import { KinoDraw } from '../models/draw.model';
@Injectable({
  providedIn: 'root'
})
export class KinoService {

  constructor(private http: HttpClient) { }

  getDraws(body: DrawSearchBody): Observable<KinoDraw[]> {
    return this.http.post<any[]>(KinoEndpoints.getEndpoint(KinoEndpointEnums.STATS), body);
  }
}
