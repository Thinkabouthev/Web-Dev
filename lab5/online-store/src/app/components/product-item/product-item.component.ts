import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<number>();

  prevImage() {
    this.product.currentImageIndex = 
      (this.product.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  nextImage() {
    this.product.currentImageIndex = 
      (this.product.currentImageIndex + 1) % this.product.images.length;
  }

  likeProduct() {
    this.product.likes++;
  }

  shareWhatsApp() {
    const message = `Посмотрите этот товар: ${this.product.name} - ${this.product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareTelegram() {
    const message = `Посмотрите этот товар: ${this.product.name} - ${this.product.link}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }

  openKaspi() {
    window.open(this.product.link, '_blank');
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}
