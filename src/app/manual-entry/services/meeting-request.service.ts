import { Injectable } from '@angular/core';
//CUSTOM IMPORTS
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//_MODELS
import { MeetingRequest } from "../../_models/manual-entry/meeting-request";
import { Menu } from "../../_models/canteen/menu";

@Injectable({
  providedIn: 'root'
})
export class MeetingRequestService {

  private baseUrl = 'http://localhost:4000/manualentry/meetingreq';

  constructor(private httpClient: HttpClient) { }
  //Read
  readMeetingRequest(): Observable<MeetingRequest[]> {
    return this.httpClient.get<MeetingRequest[]>(this.baseUrl +'/view');
  }
  readItems(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.baseUrl +'/itemview');
  }
}
