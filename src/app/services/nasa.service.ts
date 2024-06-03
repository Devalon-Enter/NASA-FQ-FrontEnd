import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

import { NasaApod, NasaMrp } from './nasa.model';

const LOCAL_STORAGE_APODKEY: string = "apod-Map";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  nasaApodCachedImages: Map<number, NasaApod> = new Map();
  nasaMrpCachedImages: Map<number, NasaMrp> = new Map();
  
  constructor(
    private http: HttpClient,
  ) {
    this.loadLocalStorage()
  }

  loadLocalStorage() {
    const serializedMap = localStorage.getItem(LOCAL_STORAGE_APODKEY);
    if(serializedMap !== null) {
      this.nasaApodCachedImages = new Map(JSON.parse(serializedMap));
    }

  }

  saveLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_APODKEY, JSON.stringify(Array.from(this.nasaApodCachedImages.entries())));
  }

  getNasaApodImages(): Observable<NasaApod[]> {
    return this.http.get<NasaApod[]>('http://localhost:8080/api/v1/nasa/apod')
    .pipe(
      tap(apods => { 
        apods.forEach(apod => {
          if(this.nasaApodCachedImages.size != 0) {
            const cacheSize: number = this.nasaApodCachedImages.size;
            apod.id = cacheSize + 1;
            console.log(apod.id);
            this.nasaApodCachedImages.set(apod.id, apod);
          } else {
            this.nasaApodCachedImages.set(apod.id, apod);
          }
          
        })
        this.saveLocalStorage();  
      })
    );
  }
  
  getCachedNasaApodImages(): NasaApod[] {
    const result: NasaApod[] = [];
    this.nasaApodCachedImages.forEach(apod => {
      result.push(apod);
    })

    return result;
  }

  getCachedNasaApodImage(id: number): NasaApod | undefined {
    return this.nasaApodCachedImages.get(id);
  }

  getNasaMrpImages(rover: string, sol: number): Observable<NasaMrp[]> {
    return this.http.get<NasaMrp[]>(`http://localhost:8080/api/v1/nasa/mrp/${rover}&${sol}`)
    .pipe(
      tap(mrps => {
        mrps.forEach(mrp => {
          this.nasaMrpCachedImages.set(mrp.id, mrp);
        })
      })
    );
  }

  getCachedNasaMrpImage(id: number): NasaMrp | undefined {
    return this.nasaMrpCachedImages.get(id);
  }

}
