import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketViewComponent } from './market-view/market-view.component';
import { NewsViewComponent } from './news-view/news-view.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '/market-view', pathMatch: 'full' },
  { path: 'market-view', component: MarketViewComponent, data: { title: 'Home' } },
  { path: 'news', component: NewsViewComponent, data: { title: 'New View' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
