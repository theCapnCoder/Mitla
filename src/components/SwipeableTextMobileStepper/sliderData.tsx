import avatar1 from "../../assets/img/avatars/avatar1.jpg";
import avatar2 from "../../assets/img/avatars/avatar2.jpg";
import avatar3 from "../../assets/img/avatars/avatar3.jpg";
import avatar4 from "../../assets/img/avatars/avatar4.jpg";

export type Slider = {
  userName: string;
  text: string;
  img: string;
  stars: number;
};

export const sliderData: Slider[] = [
  {
    userName: "Марина",
    text: "Большое спасибо за работу, аккуратную, качественную, вежливую и профессиональную. Остались очень довольны результатом, и однозначно в планах пользоваться услугами далее.",
    img: avatar1,
    stars: 5,
  },
  {
    userName: "Дмитрий",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, placeat ullam aperiam eos et iste at quis voluptas exercitationem saepe a molestiae enim perspiciatis facilis error doloribus!",
    img: avatar2,
    stars: 4,
  },
  {
    userName: "Алексей",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, corporis obcaecati necessitatibus cupiditate dolores quibusdam ad rerum molestias pariatur nemo!",
    img: avatar3,
    stars: 3,
  },
  {
    userName: "Оксана",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla voluptas quo quam voluptates voluptatum! Explicabo commodi, dolorum nam pariatur fugiat, sunt iste aperiam dolor, assumenda dicta cum aliquam maiores.",
    img: avatar4,
    stars: 2,
  },
];
