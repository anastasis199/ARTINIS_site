import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformSectionComponent } from './platform-section.component';

describe('PlatformSectionComponent', () => {
  let component: PlatformSectionComponent;
  let fixture: ComponentFixture<PlatformSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
