import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, timeout, retry, catchError, throwError } from 'rxjs';
import { ClientPortfolio } from '../models/interfaces/client-portfolio';
import { environment } from '../../environments/environment';
import { FundAction } from '../models/interfaces/fund-action';

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
  
  fundDisenrollment(fundAction: FundAction): Observable<HttpResponse<void>> {
    return this.http.delete<HttpResponse<void>>(`${this.url}/fund`, { body: fundAction })
      .pipe(
        catchError(this.handleErrorDisenrollment)
      );
  }

  private handleErrorDisenrollment(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(() => new Error(error.error.message));
    }

    return throwError(() => new Error('Ha ocurrido un error, vuelve a intentarlo'));
  }
}
