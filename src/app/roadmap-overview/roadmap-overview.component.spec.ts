import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapOverviewComponent } from './roadmap-overview.component';

describe('RoadmapOverviewComponent', () => {
  let component: RoadmapOverviewComponent;
  let fixture: ComponentFixture<RoadmapOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadmapOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
