import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketSummaryComponent } from './rocket-summary.component';

describe('RocketSummaryComponent', () => {
  let component: RocketSummaryComponent;
  let fixture: ComponentFixture<RocketSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
