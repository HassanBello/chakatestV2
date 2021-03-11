import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '@core/base.service';
import {
  IstockIndustryData,
  IstockMarketData,
  IstockDividenData,
  IstockEarningsData,
  IstockIndustiresData,
} from '@shared/interfaces';

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

  getStockIndustryOverview(): Observable<[IstockIndustryData]> {
    return this.http.get('assets/stockIndustryOverview.JSON').pipe(map((body: any) => body));
  }

  getStockDividenData(): Observable<[IstockDividenData]> {
    return this.http.get('assets/dividensPayout.json').pipe(map((body: any) => body));
  }

  getStockEarningsData(): Observable<[IstockEarningsData]> {
    return this.http.get('assets/earningsData.json').pipe(map((body: any) => body));
  }

  getSectorData(): Observable<[IstockIndustiresData]> {
    return this.http.get('assets/sectorData.JSON').pipe(map((body: any) => body));
  }
}
