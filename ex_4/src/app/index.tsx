import { ReactElement } from "react";


type ItemProps = {
  book: string
};

type ListProps = {
  list: any
};

function Item(props: ItemProps): ReactElement {
  return (
    <>
      <li>
        { props.book }
      </li>
    </>
  )
}

function List(props: ListProps): ReactElement {
  const listbooks:any = props.list
  return (
    <>
    <ul>
      {
          listbooks.map((item:string, index:number) => {
              return < Item book={item} key={index}/>
          })
      }
    </ul>
        
        
    </>
  )
}


const listTextbooks = [
  "Русский язык - Гусарова И.В.",
  "Литература (в 2 частях) - Лебедев Ю.В.",
  "Черчение - Преображенская Н.Г., Кодукова И.В.",
  "Химия - Габриелян О.С., Остроумов И.Г., Сладков С.А.",
  "Информационная безопасность. Кибербезопасность. - Цветкова М.С., Хлобыстова И.Ю.",
];

export const App = () => {
  return <List list={listTextbooks} />;
};