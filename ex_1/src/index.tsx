import { createRoot } from "react-dom/client";
import "./styles.css";

const domNode = document.getElementById("root") as HTMLDivElement;

const test = "Ololo"
const renderAddress = (street: string, house: string): JSX.Element => {
  return (
      <div>
          <p>Улица {street}</p>
          <p>Дом {house}</p>
      </div>
  )
}
const root = createRoot(domNode);
root.render(
  <>
    <p>
      Привет, меня зовут <span className="name">Проша</span>!
    </p>
    <p>
      {test} Скоро я стану крутым <span className="profession">frontend-разработчиком</span>!
    </p>
    <section>
        <h1>Я проживаю по адресу:</h1>
        {renderAddress("Пушкина", "Колотушкина")}
    </section>
    {/* <div style={{
        width: 475,
        height: 472,
        borderRadius: '50%',
        background: '#d0d5d2',
        color: '#444444',
    }}>
        Я тоже хочу быть планетой!
    </div> */}
  </>
);