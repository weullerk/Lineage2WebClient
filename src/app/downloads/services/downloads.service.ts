import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Downloads} from '../model/downloads.model';
import { Observable } from 'rxjs';

@Injectable()
export class DownloadsService {
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getDownloads(): Observable<Downloads[]> {
    let url = 'http://www.mocky.io/v2/5ad3ce7f2e000058005838da';
    return this.httpClient.get<Downloads[]>(url, {headers: this.headers});
  }

}
