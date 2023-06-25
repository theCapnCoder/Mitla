export type Button = {
  discount: string;
  text: string;
  id: number;
}

const buttonData: Button[] = [
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

export default buttonData;