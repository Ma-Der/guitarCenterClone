import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSVGComponent } from './shopping-cart-svg.component';

describe('ShoppingCartSVGComponent', () => {
  let component: ShoppingCartSVGComponent;
  let fixture: ComponentFixture<ShoppingCartSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartSVGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
