import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesSectionComponent } from './industries-section.component';

describe('IndustriesSectionComponent', () => {
  let component: IndustriesSectionComponent;
  let fixture: ComponentFixture<IndustriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
