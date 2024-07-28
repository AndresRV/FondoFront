import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout, retry } from 'rxjs';
import { ClientPortfolio } from '../models/interfaces/client-portfolio';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientTransactionsService {
  private url = environment.clientTransactionsUrl;

  constructor(private http: HttpClient) { }

  getTransactionsHistory(clientIdentification: number): Observable<ClientPortfolio> {
    return this.http.get<ClientPortfolio>(`${this.url}/user/${clientIdentification}`)
      .pipe(
        timeout(30000),
        retry({
          count: 2,
          delay: 10000
        })
      );
  }  
}
