import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/@core/base.service';
import { IstockNewsData } from '@app/@shared/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getStockNews(): Observable<[IstockNewsData]> {
    return this.http.get('assets/stockNews.json').pipe(map((body: any) => body));
  }
}
