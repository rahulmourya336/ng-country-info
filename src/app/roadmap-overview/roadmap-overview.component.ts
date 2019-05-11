import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-roadmap-overview',
  templateUrl: './roadmap-overview.component.html',
  styleUrls: ['./roadmap-overview.component.css']
})
export class RoadmapOverviewComponent implements OnInit {

  public dialogRef: MatDialogRef<RoadmapOverviewComponent>
  constructor() { }

  ngOnInit() {
  }
  
 
}
