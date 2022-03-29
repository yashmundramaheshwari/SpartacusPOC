import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductIntroComponent } from './custom-product-intro.component';

describe('CustomProductIntroComponent', () => {
  let component: CustomProductIntroComponent;
  let fixture: ComponentFixture<CustomProductIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
