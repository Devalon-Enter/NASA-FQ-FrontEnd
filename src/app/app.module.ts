import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaApodComponent } from './components/nasa-apod/nasa-apod.component';
import { NasaApodDetailComponent } from './components/nasa-apod-detail/nasa-apod-detail.component';
import { NasaMrpComponent } from './components/nasa-mrp/nasa-mrp.component';
import { NasaMrpDetailComponent } from './components/nasa-mrp-detail/nasa-mrp-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NasaApodComponent,
    NasaApodDetailComponent,
    NasaMrpComponent,
    NasaMrpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
