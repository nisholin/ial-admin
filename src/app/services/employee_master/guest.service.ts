import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../app/_models/user';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  PHP_API_SERVER = "http://49.249.229.14/ial_canteen/category_index";

  constructor(private httpClient: HttpClient) { }
  updateUser(name) {
    console.log(name)
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/employee_master_insert.php', { name })
    
  }
  readEmpDetails(): Observable<User[]>{
		return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/guest_index.php`);
	}
}
