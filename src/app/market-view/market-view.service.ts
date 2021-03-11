import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '@core/base.service';
import { IstockMarketData } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarketViewService extends BaseService<any> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getStockMarketOverview(): Observable<[IstockMarketData]> {
    return this.http.get('assets/stockOverview.JSON').pipe(map((body: any) => body));
  }

  getStockIndustryOverview(): Observable<[IstockMarketData]> {
    return this.http.get('assets/stockIndustryOverview.JSON').pipe(map((body: any) => body));
  }
}
