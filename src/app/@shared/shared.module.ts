import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { AnimateComponent } from './animate/animate.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, CollapseModule.forRoot(), FontAwesomeModule],
  declarations: [AnimateComponent, HeaderComponent],
  exports: [ AnimateComponent, FontAwesomeModule, HeaderComponent],
})
export class SharedModule {}
