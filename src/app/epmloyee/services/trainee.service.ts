import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//_models
import { Trainee } from "../../_models/employee/trainee";

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/categorymaster_index/trainee_index";

  constructor(private httpClient: HttpClient) { }

  readTraineeDetails(): Observable<Trainee[]>{
		return this.httpClient.get<Trainee[]>(this.PHP_API_SERVER + '/index.php');
	}
}
