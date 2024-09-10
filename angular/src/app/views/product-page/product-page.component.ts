import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '@core/components/search-bar/search-bar.component';
import { HeroComponent } from '@core/components/hero/hero.component';
import { ProductCardComponent } from '@core/components/product-card/product-card.component';
import { Title } from '@angular/platform-browser';
import { Product } from '@core/models';
import { PRODUCTS } from '@core/constants';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  standalone: true,
  imports: [SearchBarComponent, HeroComponent, ProductCardComponent],
})
export class ProductPageComponent implements OnInit {
  title = 'Frontend Testing Bootcamp (Angular Version) - Products';
  filteredProducts: Product[] = [];
  keywords = new UntypedFormControl('');

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.filteredProducts = PRODUCTS.slice(0, 8);

    this.keywords.valueChanges.subscribe((keyword: string) => {
      if (keyword != '') {
        this.filteredProducts = PRODUCTS.filter((product) => {
          return product.name.toLowerCase().includes(keyword.toLowerCase());
        });
      } else {
        this.filteredProducts = PRODUCTS.slice(0, 8);
      }
    });
  }

  loadMoreProducts(): void {
    const newProducts = PRODUCTS.slice(this.filteredProducts.length);
    this.filteredProducts.push(...newProducts);
  }

  get hasShownAllProducts(): boolean {
    if (this.keywords.value) return true;
    return this.filteredProducts.length === PRODUCTS.length;
  }
}
