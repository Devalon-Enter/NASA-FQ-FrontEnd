import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaApodComponent } from './components/nasa-apod/nasa-apod.component';
import { NasaApodDetailComponent } from './components/nasa-apod-detail/nasa-apod-detail.component';
import { NasaMrpComponent } from './components/nasa-mrp/nasa-mrp.component';
import { NasaMrpDetailComponent } from './components/nasa-mrp-detail/nasa-mrp-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/nasa-apod', pathMatch: 'full' },
  { path: 'nasa-apod', component: NasaApodComponent },
  { path: 'nasa-apod/:id', component: NasaApodDetailComponent },
  { path: 'nasa-mrp', component: NasaMrpComponent },
  { path: 'nasa-mrp/:id', component: NasaMrpDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
