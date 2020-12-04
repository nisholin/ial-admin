import { Injectable } from '@angular/core';
//CUSTOM IMPORTS
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//_MODELS
import { MeetingRequest } from "../../_models/manual-entry/meeting-request";
import { Menu } from "../../_models/canteen/menu";
import { Item } from "../../../app/_models/manual-entry/item";

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
  readSavedItem(itemId: any): Observable<Item[]> {
    //alert("test");
    return this.httpClient.get<Item[]>(this.baseUrl +'/editItemView/'+itemId);
  }
  readSavedItemQuantity(itemId: any): Observable<Item[]> {
    //alert("test");
    return this.httpClient.get<Item[]>(this.baseUrl +'/editItemQuantityView/'+itemId);
  }

  //save
  saveMeetingRequest(meetingReqArr: any) {
    return this.httpClient.post<MeetingRequest[]>(this.baseUrl+'/save',meetingReqArr);
  }
  //update
  updateMeetingRequst(meetingEdit: any) {
    return this.httpClient.put<MeetingRequest[]>(this.baseUrl+'/edit',meetingEdit);
  }
}
