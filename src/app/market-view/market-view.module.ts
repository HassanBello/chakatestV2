import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketViewComponent } from './market-view.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, BrowserModule, SharedModule],
  declarations: [MarketViewComponent],
  exports: [MarketViewComponent],
})
export class MarketViewModule {}
