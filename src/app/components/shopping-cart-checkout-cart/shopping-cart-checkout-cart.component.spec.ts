import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartCheckoutCartComponent } from './shopping-cart-checkout-cart.component';

describe('ShoppingCartCheckoutCartComponent', () => {
  let component: ShoppingCartCheckoutCartComponent;
  let fixture: ComponentFixture<ShoppingCartCheckoutCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartCheckoutCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartCheckoutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
