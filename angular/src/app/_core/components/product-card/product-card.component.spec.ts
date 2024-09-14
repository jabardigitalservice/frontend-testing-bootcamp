import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;
  const discountedPrice = {
    id: 'D4e5F6',
    name: 'Kemeja Flanel Merah',
    description:
      'Kemeja flanel merah dengan motif kotak-kotak yang trendi, pas untuk tampilan kasual.',
    originalPrice: 75000,
    discount: 20,
  };
  const normalPrice = {
    id: 'D4e5F6',
    name: 'Kemeja Flanel Merah',
    description:
      'Kemeja flanel merah dengan motif kotak-kotak yang trendi, pas untuk tampilan kasual.',
    originalPrice: 75000,
    discount: 0,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    const product = discountedPrice;
    component.product = product;

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should contain product image', () => {
    const element = fixture.debugElement.query(
      By.css('[data-cy="product-card__image"]')
    );
    expect(element).toBeTruthy();
  });

  it('should contain product name', () => {
    const element = fixture.debugElement.query(
      By.css('[data-cy="product-card__title"]')
    );
    expect(element).toBeTruthy();
  });

  it('should contain product description', () => {
    const element = fixture.debugElement.query(
      By.css('[data-cy="product-card__description"]')
    );
    expect(element).toBeTruthy();
  });

  it('should contain product price', () => {
    const element = fixture.debugElement.query(
      By.css('[data-cy="product-card__discounted-price"]')
    );
    expect(element).toBeTruthy();
  });

  it('should show label discount at top corner while product has discount', () => {
    const element = fixture.debugElement.query(
      By.css('[data-cy="product-card__discount-pill"]')
    );
    expect(element).toBeTruthy();
  });

  it('should hide label discount at top right corner while product has not discount', () => {
    component.product = normalPrice;

    fixture.detectChanges();

    const element = fixture.debugElement.query(
      By.css('[data-cy="product-card__discount-pill"]')
    );
    expect(element).toBeFalsy();
  });

  it('should show discount price at bottom corner and striked original price while product has discount', () => {
    const originalPrice = fixture.debugElement.query(
      By.css('s[data-cy="product-card__original-price"]')
    );
    expect(originalPrice).toBeTruthy();

    const discountedPrice = fixture.debugElement.query(
      By.css('[data-cy="product-card__discounted-price"]')
    );
    expect(discountedPrice).toBeTruthy();
  });

  it('should hide striked original price at bottom corner while product has not discount', () => {
    component.product = normalPrice;

    fixture.detectChanges();

    const originalPrice = fixture.debugElement.query(
      By.css('s[data-cy="product-card__original-price"]')
    );
    expect(originalPrice).toBeFalsy();

    const discountedPrice = fixture.debugElement.query(
      By.css('[data-cy="product-card__discounted-price"]')
    );
    expect(discountedPrice).toBeTruthy();
  });
});
