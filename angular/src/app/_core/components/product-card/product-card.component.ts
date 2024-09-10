import { Component, Input } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product?: Product;

  get formattedOriginalPrice(): string {
    return 'test';
  }

  get formattedDiscountedPrice(): string {
    return 'test';
  }
}
