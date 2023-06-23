import hall from "../../assets/img/news/hall.png";
import kitchen from "../../assets/img/news/kitchen.png";
import room from "../../assets/img/news/room.jpg";

type News = {
  img: string;
  date: string;
  title: string;
  text: string;
};

const newsData: News[] = [
  {
    img: room,
    date: "10 Марта 2023",
    title: "Периодичность проведения клининговых услуг",
    text: "Как часто убирать в офисе, производственных, технических и служебных помещениях — решение индивидуальное...",
  },
  {
    img: kitchen,
    date: "9 Марта 2023",
    title: "Комплексная уборка предприятий общественного питания",
    text: "К заведениям, где изготавливаются продукты, предъявляются повышенные требования чистоты. Поэтому уборка помещений...",
  },
  {
    img: hall,
    date: "7 Марта 2023",
    title: "Клининг для детей: ковры, матрасы и школьные классы",
    text: "Формирование характера ребенка и забота о его здоровье нуждаются в идеальной чистоте. Качественная уборка в детских садах...",
  },
];

export default newsData;