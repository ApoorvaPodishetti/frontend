import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/auth/signup'; // Adjust this URL as needed

  constructor(private http: HttpClient) {}

  // Method to call the backend API for signup
  userSignUp(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
