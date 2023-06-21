import { Card } from "../Service/types";
import balcony from '../../assets/img/extraService/balcony.png';
import fridge from '../../assets/img/extraService/fridge.png';
import hood from '../../assets/img/extraService/hood.png';
import kitchen from '../../assets/img/extraService/kitchen.png';
import microwave from '../../assets/img/extraService/microwave.png';
import oven from '../../assets/img/extraService/oven.png';
import window from '../../assets/img/extraService/window.png';


const extraServiceCards: Card[] = [
  {
    title: "Помоем духовку",
    img: oven,
    alt: "oven",
    price: '40 zł',
  },
  {
    title: "Помоем вытяжку",
    img: hood,
    alt: "hood",
    price: '40 zł',
  },
  {
    title: "Помоем микроволновку",
    img: microwave,
    alt: "microwave",
    price: '15zł',
  },
  {
    title: "Уберем в кухонных шкафчиках",
    img: kitchen,
    alt: "kitchen",
    price: '55zł',
  },
  {
    title: "Помоем холодильник",
    img: fridge,
    alt: "fridge",
    price: '30zł',
  },
  {
    title: "Уберем балкон",
    img: balcony ,
    alt: "balcony",
    price: '25zł',
  },
  {
    title: "Помоем окна",
    img: window,
    alt: "window",
    text: ' (1 сторона)',
    price: '25zł',
  },
]

export default extraServiceCards;