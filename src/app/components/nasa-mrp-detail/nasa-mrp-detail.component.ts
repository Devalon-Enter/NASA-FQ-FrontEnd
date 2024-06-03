import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaMrp } from 'src/app/services/nasa.model';
import { NasaService } from 'src/app/services/nasa.service';

import { sub } from 'date-fns';

@Component({
  selector: 'app-nasa-mrp-detail',
  templateUrl: './nasa-mrp-detail.component.html',
  styleUrls: ['./nasa-mrp-detail.component.scss']
})
export class NasaMrpDetailComponent {

  sol: number = 88775;

  nasaMrp: NasaMrp | undefined;

  constructor(
    private nasaService: NasaService,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.nasaMrp = this.nasaService.getCachedNasaMrpImage(id);
  }
}
