import { Component, NgModule, OnInit } from '@angular/core';
import { format } from 'date-fns';

import { NasaApod } from 'src/app/services/nasa.model';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.scss'],
})
export class NasaApodComponent implements OnInit {
  nasaObjects: NasaApod[] = [];

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.nasaService.getCachedNasaApodImages().forEach(apod => {
      if(!apod.url.match('\.jpg')){
        apod.video = true;
      } else {
        apod.video = false;
      }
      this.nasaObjects.push(apod)
    })
    if(this.nasaObjects.length != 21) {
      this.nasaService.getNasaApodImages()
      .subscribe(nasaObjects => nasaObjects.forEach(apod => {
        apod.date = format(String(apod.date), "do MMMM yyyy")
        this.nasaObjects.push(apod)
      }));
    }
  }
}
