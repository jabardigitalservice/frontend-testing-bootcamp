import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './product-page.component';
import { By } from '@angular/platform-browser';
import { PRODUCTS } from '@core/constants';

describe('ProductPageComponent', () => {
  let fixture: ComponentFixture<ProductPageComponent>;
  let component: ProductPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show 8 products on initial render', () => {
    const element = fixture.debugElement.queryAll(
      By.css('[data-cy="product-page__product-card"]')
    );
    expect(element.length).toBe(8);
  });

  it('should show only product contain "kemeja"', () => {
    component.keywords.setValue('kemeja');
    fixture.detectChanges();

    const elements = fixture.debugElement.queryAll(
      By.css('[data-cy="product-card__title"]')
    );

    const items = elements.map((content) =>
      content.nativeElement.textContent.toLowerCase()
    );
    const isKemejaFound = items.every((item) => item.includes('kemeja'));

    expect(isKemejaFound).toBeTrue();
  });

  it('should show 8 products (initial render) while reset keyword', () => {
    component.keywords.setValue('testing keyword asal asalan ajsndawjdnkajsnd');
    fixture.detectChanges();

    let element = fixture.debugElement.queryAll(
      By.css('[data-cy="product-page__product-card"]')
    );
    expect(element.length).toBe(0);

    component.keywords.setValue('');
    fixture.detectChanges();

    element = fixture.debugElement.queryAll(
      By.css('[data-cy="product-page__product-card"]')
    );
    expect(element.length).toBe(8);
  });

  it('should show all product (16 products) on click button load more', () => {
    const button = fixture.debugElement.query(
      By.css('[data-cy="product-page__button-load-more"]')
    );
    button.triggerEventHandler('click');

    fixture.detectChanges();

    const element = fixture.debugElement.queryAll(
      By.css('[data-cy="product-page__product-card"]')
    );
    expect(element.length).toBe(16);
  });

  it('should hide button load more while all product has been shown', () => {
    const buttonBefore = fixture.debugElement.query(
      By.css('[data-cy="product-page__button-load-more"]')
    );

    let productCount = 8;
    while (productCount < PRODUCTS.length) {
      buttonBefore.triggerEventHandler('click');

      fixture.detectChanges();

      const element = fixture.debugElement.queryAll(
        By.css('[data-cy="product-page__product-card"]')
      );
      productCount = element.length;
    }

    const buttonAfter = fixture.debugElement.query(
      By.css('[data-cy="product-page__button-load-more"]')
    );

    expect(buttonAfter).toBeFalsy();
  });

  it('should hide button load more while searching product', () => {
    component.keywords.setValue('kemeja');

    fixture.detectChanges();

    const buttonAfter = fixture.debugElement.query(
      By.css('[data-cy="product-page__button-load-more"]')
    );

    expect(buttonAfter).toBeFalsy();
  });
});
