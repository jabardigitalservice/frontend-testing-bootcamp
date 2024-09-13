import { TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './product-page.component';
import { By } from '@angular/platform-browser';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display 8 products on first render', () => {
    const productListElement = fixture.debugElement.queryAll(
      By.css('[data-cy="product-card"]')
    );
    expect(productListElement.length).toBe(8);
  });

  it('should display only related products when there is a keyword', () => {
    component.keywords.setValue('kemeja');
    fixture.detectChanges();

    const productListElement = fixture.debugElement.queryAll(
      By.css('[data-cy="product-card__title"]')
    );

    if (productListElement.length === 0) return;

    let isKemeja = productListElement.every((e: any) => {
      return e.nativeElement.textContent.toLowerCase().includes('kemeja');
    });
    expect(isKemeja).toBe(true);
  });

  it('should display all products when there is no keyword', () => {
    component.keywords.setValue('');
    fixture.detectChanges();

    const productListElement = fixture.debugElement.queryAll(
      By.css('[data-cy="product-card"]')
    );
    expect(productListElement.length).toBe(8);
  });

  it('should display 16 products when load more is clicked', () => {
    component.loadMoreProducts();
    fixture.detectChanges();

    const productListElement = fixture.debugElement.queryAll(
      By.css('[data-cy="product-card"]')
    );
    expect(productListElement.length).toBe(16);
  });

  it('should hide load more button after all products are shown', () => {
    component.loadMoreProducts();
    fixture.detectChanges();

    const loadMoreButton = fixture.debugElement.query(
      By.css('[data-cy="product-card__load-more-button"]')
    );
    expect(loadMoreButton).toBeFalsy();
  });
});
