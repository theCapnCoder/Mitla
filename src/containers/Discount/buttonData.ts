import { ButtonGroupProps } from "../../components/ButtonGroup/ButtonGroup";

const buttonData: ButtonGroupProps[] = [
  {
    id: 1,
    discount: '-20%',
    text: 'Раз в неделю'
  },
  {
    id: 2,
    discount: '-15%',
    text: 'Раз в две недели'
  },
  {
    id: 3,
    discount: '-10%',
    text: 'Раз в месяц'
  },
  {
    id: 4,
    discount: '',
    text: 'Разовая уборка'
  },
]


// const buttonData: ButtonGroupProps[] = [
//   {
//     id: 1,
//     text: 'Комната'
//   },
//   {
//     id: 2,
//     text: 'Коридор'
//   },
//   {
//     id: 3,
//     text: 'Кухня'
//   },
//   {
//     id: 4,
//     text: 'Санузел'
//   }
// ]


export default buttonData;