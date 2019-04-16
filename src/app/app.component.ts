import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { CountryAPIService } from './country-api.service';
import { MatIconRegistry, MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: FormGroup;
  countryName: String;
  isLoading = 0;
  countryList = [];

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private API: CountryAPIService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private snackBar: MatSnackBar) {
    console.log('Init');
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  searchCountry() {
    if (this.countryName === '' || !this.countryName) { this.openSnackBar('Please enter a country name', 'Okay'); return; }
    this.countryList = [];
    this.isLoading = 1;
    console.log(this.API.getCountryByName(this.countryName));

    this.API.getCountryByName(this.countryName).subscribe((res: any) => {
      console.log(res);
      this.countryList = res;
      this.isLoading = 0;
      this.openSnackBar(`${this.countryList.length} countries found`, 'Dismiss');
    }, (err) => {
      this.isLoading = 0;
      this.openSnackBar(`Cannot find country ${this.countryName}`, 'Dismiss');
      console.error(err);
    });
  }

  async openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
