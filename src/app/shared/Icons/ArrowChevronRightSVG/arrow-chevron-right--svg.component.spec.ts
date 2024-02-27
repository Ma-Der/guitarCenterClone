import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowChevronRightSVGComponent } from './arrow-chevron-right-svg.component';

describe('ShoppingCartSVGComponent', () => {
  let component: ArrowChevronRightSVGComponent;
  let fixture: ComponentFixture<ArrowChevronRightSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowChevronRightSVGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowChevronRightSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
