import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from '../models/vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private BASE_URL = 'http://localhost:8000/api/vacancies/';

  constructor(private http: HttpClient) {}

  getVacancies(number: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.BASE_URL);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}${id}/`);
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}top_ten/`);
  }

  createVacancy(vacancy: { name: string; salary: number; company: number | undefined }): Observable<Vacancy> {
  return this.http.post<Vacancy>(this.BASE_URL, vacancy);
}

  deleteVacancy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}${id}/`);
  }
}
