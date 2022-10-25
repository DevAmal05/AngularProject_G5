
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class HotoserviceService {

  constructor(private http: HttpClient) {}

  getImages() {
      return this.http
          .get<any>('assets/showcase/data/photos.json')
          .toPromise()
          .then((res) => <Image[]>res.data)
          .then((data) => {
              return data;
          });
  }
}
