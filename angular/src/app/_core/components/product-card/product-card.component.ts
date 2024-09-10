import { Component, Input, OnInit } from '@angular/core';
import { RupiahFormatPipe } from '@core/pipes';
import { Product } from '@core/models';
import { calculatePriceWithDiscount } from '@core/utils';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  imports: [RupiahFormatPipe],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {
    this.product.discountedPrice = calculatePriceWithDiscount(
      this.product.originalPrice,
      this.product.discount
    );
  }
}
