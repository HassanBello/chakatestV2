import { Component, OnInit } from '@angular/core';
import {
  IstockDividenData,
  IstockEarningsData,
  IstockIndustryData,
  IstockMarketData,
  IstockIndustiresData,
} from '@shared/interfaces';
import { MarketViewService } from './market-view.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.scss'],
})
export class MarketViewComponent implements OnInit {
  marketData: IstockMarketData[] = [];
  industryData: IstockIndustryData[] = [];
  dividenData: IstockDividenData[] = [];
  earningsData: IstockEarningsData[] = [];
  sectorData: IstockIndustiresData[] = [];
  isLoading: boolean = false;
  starIcon = faStar;

  constructor(private marketViewService: MarketViewService) {}

  ngOnInit(): void {
    this.getMarketOverviewData();
    this.getMarketIndustryOverviewData();
    this.getDividensOverviewData();
    this.getEarningsData();
    this.getSectorData();
  }

  getMarketOverviewData() {
    this.marketViewService.getStockMarketOverview().subscribe((response) => {
      this.marketData = response;
      this.isLoading = false;
    });
  }

  getMarketIndustryOverviewData() {
    this.marketViewService.getStockIndustryOverview().subscribe((response) => {
      this.industryData = response;
    });
  }

  getDividensOverviewData() {
    this.marketViewService.getStockDividenData().subscribe((response) => {
      this.dividenData = response;
    });
  }

  getEarningsData() {
    this.marketViewService.getStockEarningsData().subscribe((response) => {
      this.earningsData = response;
    });
  }

  getSectorData() {
    this.marketViewService.getSectorData().subscribe((response) => {
      this.sectorData = response;
    });
  }
}
