import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '@core/components/search-bar/search-bar.component';
import { HeroComponent } from '@core/components/hero/hero.component';
import { ProductCardComponent } from '@core/components/product-card/product-card.component';
import { Title } from '@angular/platform-browser';
import { Product } from '@core/models';
import { PRODUCTS } from '@core/constants';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  standalone: true,
  imports: [SearchBarComponent, HeroComponent, ProductCardComponent],
})
export class ProductPageComponent implements OnInit {
  title = 'Frontend Testing Bootcamp (Angular Version) - Products';
  products?: Product[];

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.products = PRODUCTS;
  }
}
