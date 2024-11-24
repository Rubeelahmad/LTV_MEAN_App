import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { PhoneNumber } from '../models/phone-number.model';
import { AuthService } from './auth.service'; // Import AuthService

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private readonly API_URL = 'http://localhost:3000/api';

  private filterOptionsSubject$ = new BehaviorSubject<{ status: string }>({ status: 'all' });

  constructor(private http: HttpClient, private authService: AuthService) {}

  get filterOptions$(): Observable<{ status: string }> {
    return this.filterOptionsSubject$.asObservable();
  }

  updateFilterOptions(options: { status: string }): void {
    this.filterOptionsSubject$.next({ ...this.filterOptionsSubject$.value, ...options });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();
  }

  getPhoneNumbers(status?: string, page: number = 1, limit: number = 10): Observable<any> {
    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }
  
    params = params.set('page', page.toString());  
    params = params.set('limit', limit.toString()); 
  
    const headers = this.getAuthHeaders();
  
    return this.http.get<any>(`${this.API_URL}/phoneList`, { params, headers });
  }
  

  toggleStatus(id: string, newStatus: 'active' | 'inactive'): Observable<PhoneNumber> {
    const headers = this.getAuthHeaders();
    return this.http.patch<PhoneNumber>(`${this.API_URL}/phoneList/${id}/status`, { status: newStatus }, { headers });
  }
}
