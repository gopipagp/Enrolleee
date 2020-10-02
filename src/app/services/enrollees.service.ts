import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class EnrolleesService {

  constructor(private http: HttpClient) { }

    URL: string = "http://localhost:3000";
    getEnrollees() : Observable<any> {
        return this.http.get(this.URL + '/enrollees');
    }

    updateEnrollee(user: User) : Observable<any> {
        return this.http.put(`${this.URL}/enrollees/${user.id}`, user);
    }

}
