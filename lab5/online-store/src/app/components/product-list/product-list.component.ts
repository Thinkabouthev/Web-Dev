import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

interface Product {
  id: number;
  images: string[];
  name: string;
  description: string;
  rating: number;
  link: string;
  currentImageIndex: number;
  likes: number;
}

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() removeProduct = new EventEmitter<number>();
}
