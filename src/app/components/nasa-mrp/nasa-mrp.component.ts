import { Component } from '@angular/core';
import { format } from 'date-fns';

import { NasaMrp } from 'src/app/services/nasa.model';
import { NasaService } from 'src/app/services/nasa.service';

interface Rover {
  value: string,
  viewValue: string,
}

@Component({
  selector: 'app-nasa-mrp',
  templateUrl: './nasa-mrp.component.html',
  styleUrls: ['./nasa-mrp.component.scss']
})
export class NasaMrpComponent {
  rover: string = 'curiosity';
  sol: number = 0;

  nasaObjects: NasaMrp[] | undefined;

  ngOnInit() {
    console.log("init triggered");
    this.nasaService.getNasaMrpImages('curiosity', 0)
    .subscribe(nasaObjects => {
      nasaObjects.forEach(nasaObject => {
        nasaObject.earth_date = format(String(nasaObject.earth_date), "do MMMM yyyy");
        nasaObject.rover.landing_date = format(String(nasaObject.rover.landing_date), "do MMMM yyyy");
        nasaObject.rover.launch_date = format(String(nasaObject.rover.launch_date), "do MMMM yyyy");
        nasaObject.rover.max_date = format(String(nasaObject.rover.max_date), "do MMMM yyyy");
      })
      this.nasaObjects = nasaObjects;
    });
  }

  constructor(private nasaService: NasaService) {}

  search() {
    console.log("Reached service");
    this.nasaService.getNasaMrpImages(this.rover, this.sol)
    .subscribe(nasaObjects => {
      nasaObjects.forEach(nasaObject => {
        nasaObject.earth_date = format(String(nasaObject.earth_date), "do MMMM yyyy");
        nasaObject.rover.landing_date = format(String(nasaObject.rover.landing_date), "do MMMM yyyy");
        nasaObject.rover.launch_date = format(String(nasaObject.rover.launch_date), "do MMMM yyyy");
        nasaObject.rover.max_date = format(String(nasaObject.rover.max_date), "do MMMM yyyy");
      })
      this.nasaObjects = nasaObjects;
    });
    console.log(`Service called | values: ${this.rover}; ${this.sol}`);
  }
}
