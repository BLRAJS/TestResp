import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationRefinementComponent } from './destination-refinement.component';

describe('DestinationRefinementComponent', () => {
  let component: DestinationRefinementComponent;
  let fixture: ComponentFixture<DestinationRefinementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationRefinementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationRefinementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
