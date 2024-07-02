import { ReactElement } from "react";

function Button(): ReactElement {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log("Я ничего не знаю!");
  };

  const handleClickDiv = (event: React.MouseEvent) => {
    
    console.log("Я очень много знаю!");
    
  };

  return (
    <div onClick={handleClickDiv }>
      <span>
        <button onClick={handleClick}>Очень любопытная кнопка</button>
      </span>
    </div>
  );
}

export const App = () => {
  return <Button />;
};