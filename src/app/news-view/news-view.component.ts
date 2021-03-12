import { Component, OnInit } from '@angular/core';
import { IstockNewsData } from '@app/@shared/interfaces';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss'],
})
export class NewsViewComponent implements OnInit {
  stockNews: IstockNewsData[] = [];
  isLoading: boolean;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getStockNews();
  }

  getStockNews() {
    this.newsService.getStockNews().subscribe((response) => {
      this.stockNews = response;
      setTimeout(() => { this.isLoading = false; }, 2000);
    });
  }
}
