import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodologySectionComponent } from './methodology-section.component';

describe('MethodologySectionComponent', () => {
  let component: MethodologySectionComponent;
  let fixture: ComponentFixture<MethodologySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodologySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodologySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
