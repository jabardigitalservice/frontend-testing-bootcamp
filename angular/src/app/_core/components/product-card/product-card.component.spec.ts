import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';
import { calculatePriceWithDiscount, formatCurrencyToIDR } from '@core/utils';

const DISCOUNTED_PRODUCTS = {
  id: 'A1b2C3',
  name: 'Kaos Polos Hitam',
  description:
    'Kaos polos hitam dengan bahan katun yang nyaman dan adem, cocok untuk digunakan sehari-hari.',
  originalPrice: 45000,
  discount: 10,
};
const NORMAL_PRODUCTS = {
  id: 'D4e5F6',
  name: 'Kemeja Flanel Merah',
  description:
    'Kemeja flanel merah dengan motif kotak-kotak yang trendi, pas untuk tampilan kasual.',
  originalPrice: 75000,
  discount: 0,
};

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    });

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = NORMAL_PRODUCTS;
    fixture.detectChanges();
  });

  it('should render a product card', () => {
    expect(component).toBeTruthy();
  });

  it('should display the product image', () => {
    const imageElement = fixture.debugElement.query(
      By.css('[data-cy="product-card__image"]')
    );
    expect(imageElement).toBeTruthy();
    expect(imageElement.nativeElement.src).toBeInstanceOf(String);
  });

  it('should display the product name', async () => {
    const nameElement = fixture.debugElement.query(
      By.css('[data-cy="product-card__title"]')
    );
    expect(nameElement.nativeElement.textContent).toContain(
      NORMAL_PRODUCTS.name
    );
  });

  it('should display the product description', async () => {
    const descriptionElement = fixture.debugElement.query(
      By.css('[data-cy="product-card__description"]')
    );
    expect(descriptionElement.nativeElement.textContent).toContain(
      NORMAL_PRODUCTS.description
    );
  });

  it('should display the correct price according to discount', async () => {
    // test if there is no discount
    const priceElement = fixture.debugElement.query(
      By.css('[data-cy="product-card__discounted-price"]')
    );
    expect(priceElement.nativeElement.textContent).toContain(
      formatCurrencyToIDR(NORMAL_PRODUCTS.originalPrice)
    );

    // test if there is a discount
    component.product = DISCOUNTED_PRODUCTS;
    fixture.detectChanges();
    expect(priceElement.nativeElement.textContent).toContain(
      formatCurrencyToIDR(
        calculatePriceWithDiscount(
          DISCOUNTED_PRODUCTS.originalPrice,
          DISCOUNTED_PRODUCTS.discount
        )
      )
    );
  });

  it('should display the discount label if there is a discount', async () => {
    component.product = DISCOUNTED_PRODUCTS;
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(
      By.css('[data-cy="product-card__discount-pill"]')
    );
    expect(labelElement).toBeTruthy();
  });

  it('should display strikethroughed price and discounted price if there is a discount', async () => {
    component.product = DISCOUNTED_PRODUCTS;
    fixture.detectChanges();

    const originalPriceElement = fixture.debugElement.query(
      By.css('[data-cy="product-card__original-price"]')
    );

    expect(originalPriceElement.nativeElement.textContent).toContain(
      formatCurrencyToIDR(DISCOUNTED_PRODUCTS.originalPrice)
    );

    expect(originalPriceElement.nativeElement.classList).toContain(
      'line-through'
    );
  });
});
