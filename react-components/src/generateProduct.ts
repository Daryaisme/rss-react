import img1 from './images/flowers_1.jpg';
import img2 from './images/flowers_2.jpg';
import img3 from './images/flowers_3.jpg';
import img4 from './images/flowers_4.jpg';
import img5 from './images/flowers_5.jpg';
import img6 from './images/flowers_6.jpg';
import img7 from './images/flowers_7.jpg';
import img8 from './images/flowers_8.jpg';
import img9 from './images/flowers_9.jpg';
import img10 from './images/flowers_10.jpg';
import { productType } from './types';

export function generateProducts(n = 100): productType[] {
  const products: productType[] = [];

  for (let i = 0; i < n; i++) {
    products.push(generateProduct());
  }

  return products;
}

const names: string[] = [
  'Букет "Summer"',
  'Букет "Memories"',
  'Букет "Pink"',
  'Букет "Party!"',
  'Букет "For Mom"',
  'Букет "Sweet evening"',
  'Букет "Happiness"',
  'Букет "Berries"',
  'Букет "Date"',
  'Букет "Butterflies"',
];

const descriptions: string[] = [
  'Прекрасный букет в подарок друзьям или родным!',
  'Тот самый букет на день Учителя',
  'Красота в простоте...',
  'Букет на юбилей!',
  'Порадуй свою девушку этим букетом!',
  'Отличный повод купить цветы - это красивый букет!',
  'Цветы на первое сентября',
  'Букет не оставит равнодушной любую девушку',
  'Милый маленький букетик',
  'Букет цветов и улыбок',
];

const pictures: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function generateProduct(): productType {
  const product: productType = {
    id: Math.random().toString(36).substring(2),
    name: names[Math.floor(Math.random() * 10)],
    description: descriptions[Math.floor(Math.random() * 10)],
    price: Math.floor(Math.random() * 9990) + 10,
    rating: Math.floor(Math.random() * 100) + 1,
    imageUrl: pictures[Math.floor(Math.random() * 10)],
  };

  return product;
}
