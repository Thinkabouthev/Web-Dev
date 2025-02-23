import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';

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

interface Category {
  name: string;
  products: Product[];
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    { name: 'Смартфоны', products: [
      {
        id: 1,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-large',
        ],
        name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
        description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 2,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-large',
        ],
        name: 'Смартфон Apple iPhone 16 128Gb черный',
        description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 3,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-large',
        ],
        name: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
        description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 4,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h96/h5b/85428899545118.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-large',
        ],
        name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
        description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 5,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h7c/hf1/85428764672030.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h7f/85428764737566.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h8a/h0c/85428764803102.png?format=gallery-large',
        ],
        name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ сиреневый',
        description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      }
    ]
  },
    { name: 'Декоративная косметика', products: [
      {
        id: 1,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p27/pa2/18247952.jpeg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/p64/pac/18247955.jpeg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/p75/pf7/18247961.jpeg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/pa2/pf0/18247963.jpeg?format=gallery-large',
        ],
        name: 'Dramatically different moisturising основа под макияж для лица 125 мл',
        description: 'Лучшая база',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/111skin-dramatically-different-moisturising-osnova-pod-makijazh-dlja-litsa-125-ml-132897316/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 2,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h23/hcc/86604996804638.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h10/h82/86609946542110.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h08/h29/86604996837406.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h21/86604996968478.jpg?format=gallery-large',
        ],
        name: 'Beauty of Joseon крем Relief Sun Rice Probiotics SPF50 для лица 50 мл',
        description: 'Солнцезащитный крем с пробиотиками обеспечивает надёжную защиту от пагубных воздействий солнечных лучей',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/beauty-of-joseon-krem-relief-sun-rice-probiotics-spf50-dlja-litsa-50-ml-105587876/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 3,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hec/heb/86241000882206.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h0e/h84/86609790009374.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h77/hab/86241000914974.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h5b/h5f/86241000947742.jpg?format=gallery-large',
        ],
        name: 'Dr.Ceuracle крем Pro Balance Biotics Moisturizer для лица 100 мл',
        description: 'Этот увлажняющий крем имеет идентичные коже ингредиенты, которые имитируют кожные выделения, увлажняет кожу, а также имеет функцию удерживать влагу',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/dr-ceuracle-krem-pro-balance-biotics-moisturizer-dlja-litsa-100-ml-100675870/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 4,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h90/h64/85970866733086.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h82/h07/85970866765854.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h5c/hdb/85970866831390.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h34/h8a/85970866896926.png?format=gallery-large',
        ],
        name: 'The Act Гидрофильное масло для умывания 110 мл',
        description: 'Гидрофильное масло быстро удаляет стойкий макияж и уменьшает ощущение стянутости и сухости после умывания. ',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/the-act-gidrofil-noe-maslo-dlja-umyvanija-110-ml-103627124/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      },
      {
        id: 5,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hcd/ha4/86907475787806.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h58/h87/86907475853342.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h87/h07/86907475918878.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hef/he6/86907475984414.jpg?format=gallery-large',
        ],
        name: 'Dr. Althea крем 147 Barrier Cream для лица 50 мл',
        description: 'Успокаивающий крем Dr. Althea 147 Barrier Cream — интенсивно питающее средство.',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/?c=750000000',
        currentImageIndex: 0,
        likes: 0
      }
    ]
  },
    { name: 'Бытовая техника', products: [
      {
      id: 1,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/had/h34/63803868741662.jpg?format=gallery-large',
      ],
      name: 'Пылесос Deerma DX700 белый',
      description: 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 2,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/pbe/6399976.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf4/pbe/6399977.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p10/pbf/6399978.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/pbf/6399979.jpg?format=gallery-large',
      ],
      name: 'Пылесос Xiaomi Vacuum Cleaner G20 Lite белый',
      description: 'Пылесос с подстветкой',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/xiaomi-vacuum-cleaner-g20-lite-belyi-119675547/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 3,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h64/h47/84397882310686.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hba/84398528004126.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/hd0/84398528036894.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h6b/84397882507294.jpg?format=gallery-large',
      ],
      name: 'Стиральная машина LG F2J3NS0W белый',
      description: 'Эта модель снабжена инверторным двигателем с прямым приводом, он отличается более длительным сроком службы, чем обычный, так как в его конструкции нет щёток и ремня.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 4,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h69/hfe/84636579004446.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h33/h40/84643724066846.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hb4/84643724099614.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h93/84643724132382.jpg?format=gallery-large',
      ],
      name: 'Увлажнитель воздуха Maxmoll H2O A5 белый',
      description: 'Увлажнитель воздуха',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-a5-belyi-109792185/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/h4b/85243910946846.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hf4/85243911012382.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h57/h5a/85243911077918.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h79/85243911143454.jpg?format=gallery-large',
      ],
      name: 'Электрогриль Silver Crest EL-8L',
      description: 'Аэрогриль',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/elektrogril-silver-crest-el-8l-116751664/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    }
  ]
},
    { name: 'Мебель', products: [{
      id: 1,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/h2f/67423805636638.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/h13/67423806554142.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/h2f/67423805636638.jpg?format=gallery-large',
      ],
      name: 'ТВ-тумба напольная Modern New Design TT',
      description: 'ТВ-тумба напольная Modern New Design TT, 180x40x35 см, белый, коричневый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 2,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/he2/85358048739358.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h64/85358048804894.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/hbc/85358048870430.jpg?format=gallery-large',
      ],
      name: 'Стеллаж напольный Abuer, 66x31x132 см, белый',
      description: 'Напольный белый стеллаж для хранения создаст уют не только дома, но он так же подходит для дачи, для загородного дома, для офиса',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 3,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p0e/1618343.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/hec/86837899624478.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/h1d/86837899657246.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h33/86837899690014.jpg?format=gallery-large',
      ],
      name: 'Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, бежевый',
      description: 'Практичный  диван-кровать с легкой системой трансформации.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-bezhevyi-109383093/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 4,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/ha1/63856428154910.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pa9/16790134.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/pa9/16790135.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/pa9/16790136.jpg?format=gallery-large',
      ],
      name: 'Вешалка напольная ЗМИ Дерево ВНП 211, металл, 37.5x181 см, черный',
      description: 'Напольная вешалка «Дерево» — это не только функциональный предмет мебели, но и стильный аксессуар, который станет украшением вашего интерьера',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-zmi-derevo-vnp-211-metall-37-5x181-sm-chernyi-100370863/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h08/86051600597022.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h02/hf8/86051600793630.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/hd9/86051600859166.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/hc3/86051600990238.jpg?format=gallery-large',
      ],
      name: 'Компьютерное кресло mebel4you 110',
      description: 'белый, темно-серый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/komp-juternoe-kreslo-mebel4you-110-belyi-temno-seryi-119374028/?c=750000000',
      currentImageIndex: 0,
      likes: 0
    }
  ]
},
  ];
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p.id !== productId);
    }
  }
  likeProduct(product: Product) {
    product.likes++;
  }

  shareWhatsApp(product: Product) {
    const message = `Посмотрите этот товар: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareTelegram(product: Product) {
    const message = `Посмотрите этот товар: ${product.name} - ${product.link}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }

  openKaspi(product: Product) {
    window.open(product.link, '_blank');
  }
}