import { Component } from '@angular/core';
import { NasaApod } from 'src/app/services/nasa.model';
import { NasaService } from 'src/app/services/nasa.service';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-nasa-apod-detail',
  templateUrl: './nasa-apod-detail.component.html',
  styleUrls: ['./nasa-apod-detail.component.scss']
})
export class NasaApodDetailComponent {
  nasaApod: NasaApod | undefined;
  nasaDate: string = '';

  constructor(
    private nasaService: NasaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.nasaApod = this.nasaService.getCachedNasaApodImage(id);
    console.log("format date reached?");
    this.formatDate();
  }

  formatDate(): string {
    this.nasaDate = format(String(this.nasaApod?.date), "do MMMM yyyy", );
    return this.nasaDate;
  }
  
}
 