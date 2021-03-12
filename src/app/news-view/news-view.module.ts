import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [SharedModule, CommonModule, BrowserModule],
  declarations: [NewsViewComponent],
  exports: [NewsViewComponent]
})
export class NewsViewModule {}
