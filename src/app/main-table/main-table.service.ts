import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import DataRow from './DataRow';

@Injectable({
  providedIn: 'root'
})
export class MainTableService {

  private url: string = "http://tytus-new.kruk-inkaso.com.pl:333/latest/DataExtraction/GetExtractionDataForInterface";

  constructor(private httpClient: HttpClient) {

  }

  getData(): Observable<DataRow[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'executingUser': 'KRUK\\app_DataExtraApi_t'
      })
    };

    const data = this.httpClient.get<DataRow[]>(this.url, httpOptions)
      .pipe
      (
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      )
    return data;
  }

  handleError(err: any) {
    const errMsg = err.error.message;
    console.error(errMsg)
    return throwError(errMsg);
  }
}
