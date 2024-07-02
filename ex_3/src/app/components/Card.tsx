import { ReactElement } from "react";


type CardProps = {
    title: ReactElement
    body : ReactElement
};

export default function Welcome(props: CardProps): ReactElement {
  console.log(props)
  return (
    <>
      <div className="card">
      {props.title}
      {props.body}
      
      <button type="button">В корзину</button>
    </div>
    </>
  );
}