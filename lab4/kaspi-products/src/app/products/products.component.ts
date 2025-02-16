import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery?: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products: Product[] = [
    {
      id: 1,
      image: '/assets/images/1/1.jpg',
      name: 'Наушники Marshall Major IV черный',
      description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
      gallery: [
        '/assets/images/1/1.1.jpg',
        '/assets/images/1/1.2.jpg',
        '/assets/images/1/1.3.jpg',
      ]
    },
    {
      id: 2,
      image: '/assets/images/2/2.jpeg',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      gallery: [
        '/assets/images/2/21.jpeg',
        '/assets/images/2/22.jpeg',
        '/assets/images/2/23.jpeg',
      ]
    },
    {
      id: 3,
      image: '/assets/images/3/3.jpg',
      name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
      gallery: [
        '/assets/images/3/31.jpg',
        '/assets/images/3/32.jpg',
        '/assets/images/3/33.jpg',
      ]
    },
    {
      id: 4,
      image: 'assets/images/4/4.jpg',
      name: 'Sony WH-1000XM5',
      description: 'Флагманские наушники с активным шумоподавлением и длительным временем работы.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sony-wf-1000xm5-chernyi-112854077/?c=750000000',
      gallery: [
        'assets/images/4/41.jpg',
        'assets/images/4/42.jpg',
        'assets/images/4/43.jpg',
      ]
    },
    {
      id: 5,
      image: 'assets/images/5/5.jpg',
      name: 'Apple AirPods Pro (2nd Gen)',
      description: 'Наушники с передовым шумоподавлением и пространственным звуком.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
      gallery: [
        'assets/images/5/51.jpg',
        'assets/images/5/52.jpg',
        'assets/images/5/53.jpg',
      ]
    },
    {
      id: 6,
      image: 'assets/images/6/6.jpg',
      name: 'JBL Tune 760NC',
      description: 'Беспроводные наушники с активным шумоподавлением и мощными басами.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-107892312/',
      gallery: ['assets/images/6/6.1.jpg', 'assets/images/6/6.2.jpg', 'assets/images/6/6.3.jpg']
    },
    {
      id: 7,
      image: 'assets/images/7/7.jpg',
      name: 'Beats Studio3 Wireless',
      description: 'Премиальные наушники от Beats с шумоподавлением и глубокими басами.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/beats-studio3-wireless-108123789/',
      gallery: ['assets/images/7/7.1.jpg', 'assets/images/7/7.2.jpg', 'assets/images/7/7.3.jpg']
    },
    {
      id: 8,
      image: 'assets/images/8/8.jpg',
      name: 'HyperX Cloud II',
      description: 'Геймерская гарнитура с объемным звуком и микрофоном с шумоподавлением.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/hyperx-cloud-ii-109223987/',
      gallery: ['assets/images/8/8.1.jpg', 'assets/images/8/8.2.jpg', 'assets/images/8/8.3.jpg']
    },
    {
      id: 9,
      image: 'assets/images/9/9.jpg',
      name: 'Razer Kraken Tournament Edition',
      description: 'Игровая гарнитура с виртуальным объемным звуком и усиленными басами.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/razer-kraken-tournament-edition-110324678/',
      gallery: ['assets/images/9/9.1.jpg', 'assets/images/9/9.2.jpg', 'assets/images/9/9.3.jpg']
    },
    {
      id: 10,
      image: 'assets/images/10/10.jpg',
      name: 'Bose QuietComfort 45',
      description: 'Наушники с передовым шумоподавлением и кристально чистым звуком.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-111425789/',
      gallery: ['assets/images/10/10.1.jpg', 'assets/images/10/10.2.jpg', 'assets/images/10/10.3.jpg']
    }
  ];

  constructor() { }

  getRating(rating: number): string {
    return `Рейтинг: ${rating} ⭐`;
  }
  
  shareWhatsApp(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareTelegram(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }
}