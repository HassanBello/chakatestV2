import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [NewsViewComponent],
  imports: [SharedModule, CommonModule],
})
export class NewsViewModule {}
