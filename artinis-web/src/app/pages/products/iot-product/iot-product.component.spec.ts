import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotProductComponent } from './iot-product.component';

describe('IotProductComponent', () => {
  let component: IotProductComponent;
  let fixture: ComponentFixture<IotProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IotProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IotProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
