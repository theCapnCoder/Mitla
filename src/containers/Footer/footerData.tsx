import { LogoLittle } from "../../assets/img/LogoLittle"

type Data = {
  title: string | React.ReactNode,
  categories: string[],
}

export const footerData: Data[] = [
  {
    title: <LogoLittle sx={{ width: "65px", height: "20px"}} />,
    categories: [
      "О нас",
      "Вопросы и ответы",
      "Отзывы",
      "Услуги уборки",
      "Скидки и акции",
      "Что убираем",
      "Вакансии",
    ]
  },
  {
    title: "Услуги",
    categories: [
      "Уборка квартиры",
      "Уборка после ремонта",
      "Муж на час",
      "Уборка офиса",
      "Перевозки / Переезды",
      "Дезинфекция",
      "Помощница по дому",
      "Доп. услуги",
    ]
  },
  {
    title: "Скидки и акции",
    categories: [
      "Корпоративные скидки и программы",
      "Стань нашим партнером",
      "Вакансии",
      "Цены за услуги",
    ]
  },
]