import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss'],
})
export class NewsViewComponent implements OnInit {
  stockNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getStockNews();
  }

  getStockNews() {
    this.newsService.getStockNews().subscribe((response) => {
      this.getStockNews = response;
    });
  }
}
