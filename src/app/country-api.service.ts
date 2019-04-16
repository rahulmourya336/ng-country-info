import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryAPIService {
  BASEURL = 'https://restcountries.eu/rest/v2';
  constructor(private http: HttpClient) {}

  getCountryByName(name) {
    console.log('Searching for ', name);
    return this.http.get(`${this.BASEURL}/name/${name}`);
  }
}
