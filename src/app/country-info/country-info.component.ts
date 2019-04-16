import { Component, OnInit, Input } from '@angular/core';
import { MAT_GRID_LIST } from '@angular/material/grid-list/typings/grid-list-base';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  @Input() isLoading: number;
  @Input() countryList;
  toggleSwitch = true;
  bookmarkIcon = '';
  validUser  = false;

  constructor() { }

  ngOnInit() {
    this.bookmarkIcon = 'bookmark_outline';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck(): void { }

  isBookmarked(ev: any) {
    event.stopPropagation();
    this.toggleSwitch = !this.toggleSwitch;
    this.toggleSwitch ? this.bookmarkIcon = 'bookmark_outline' : this.bookmarkIcon = 'bookmark';
  }

  openGMaps(countryName) {
    if (countryName.includes('(')) {
      countryName = countryName.split('(')[0];
    }
    const URL = `https://www.google.com/maps/place/${countryName}`;
    window.open(URL, '_blank');
  }

}
