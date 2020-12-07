import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//_models
import { User } from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  private baseUrl = 'http://localhost:4000/barcode';

  constructor(private httpClient: HttpClient) { }

  readEmployee(empcode: any): Observable<User[]>{
		return this.httpClient.get<User[]>(this.baseUrl +'/view/'+empcode);
	}
}
