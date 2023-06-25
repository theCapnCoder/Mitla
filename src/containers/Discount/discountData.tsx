import calendar from '../../assets/img/discount/calendar.png';
import eco from '../../assets/img/discount/eco.png';
import money from '../../assets/img/discount/money.png';
import wallet from '../../assets/img/discount/wallet.png';

export type Card = {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const discountCards: Card[] = [
  {
    img: money,
    alt: "money",
    title: "Фиксированная цена",
    text: "Стоимость не меняется вашем в процессе уборки",
  },
  {
    img: wallet,
    alt: "wallet",
    title: "Удобный способ оплаты",
    text: "Оплата производиться любым удобным для вас способом",
  },
  {
    img: calendar,
    alt: "calendar",
    title: "Уборка 24/7",
    text: "Мы работаем круглосуточно",
  },
  {
    img: eco,
    alt: "eco",
    title: "Eco",
    text: "Мы заботимся о здоровье, пользуясь эко химией для уборки",
  },
]

export default discountCards;