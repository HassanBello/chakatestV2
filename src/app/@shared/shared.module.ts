import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, FontAwesomeModule],
})
export class SharedModule {}
