import { Component, OnInit } from '@angular/core';
import { IstockMarketData } from '@shared/interfaces';
import { MarketViewService } from './market-view.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.scss'],
})
export class MarketViewComponent implements OnInit {
  marketData: IstockMarketData[] = [];
  industryData: any[] = [];
  isLoading: boolean = false;
  starIcon = faStar;

  constructor(private marketViewService: MarketViewService) {}

  ngOnInit(): void {
    this.getMarketOverviewData();
    this.getMarketIndustryOverviewData();
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
}
