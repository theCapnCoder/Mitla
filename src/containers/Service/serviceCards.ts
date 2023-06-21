import { Card } from "./types";
import bacteria from '../../assets/img/service/bacteria.png';
import basket  from '../../assets/img/service/basket.png';
import office  from '../../assets/img/service/office.png';
import paint from '../../assets/img/service/paint.png';
import scrubwoman from '../../assets/img/service/scrubwoman.png';
import tools from '../../assets/img/service/tools.png';
import truck from '../../assets/img/service/truck.png';

const serviceCards: Card[] = [
  {
    title: "Стандартная уборка",
    img: basket,
    alt: "basket",
  },
  {
    title: "Уборка после ремонта",
    img: paint,
    alt: "paint",
  },
  {
    title: "Муж на час",
    img: tools,
    alt: "tools",
  },
  {
    title: "Уборка офиса",
    img: office,
    alt: "office",
  },
  {
    title: "Перевозки Переезды",
    img: truck,
    alt: "truck",
  },
  {
    title: "Дезинфекция",
    img: bacteria,
    alt: "bacteria",
  },
  {
    title: "Помощница по дому",
    img: scrubwoman,
    alt: "scrubwoman",
  },
];

export default serviceCards;