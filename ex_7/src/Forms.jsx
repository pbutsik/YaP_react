import { useState, useEffect, useRef } from 'react';

// Управляемые компоненты
export function Input() {
    // Состояние, в котором содержится значение поля ввода
    const [value, setValue] = useState("");

    // Обработчик изменения поля ввода обновляет состояние
  function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        // Значение элемента «привязывается» к значению состояния
    <input type="text" value={value} onChange={handleChange} />
  );
} 


export function NewMessage() {
    const [value, setValue] = useState('');
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    function resetValue() {
      setValue('');
    }
      
    return (
      <>
        <textarea type="text" value={value} onChange={handleChange} />
        <button onClick={resetValue}>Очистить</button>
      </>
    );
  } 



  // Неуправляемые компоненты

  export function BlogpostTitleInput() {
    const input = useRef(null);
  
    function handleSubmit(e) {
      alert("Заголовок поста в блоге: " + input.current.value);
      e.preventDefault();
    }

    console.log(input)
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Заголовок:
          <textarea ref={input} defaultValue="Привет, мир!"/>
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
  } 

  export function AvatarInput() {
    const fileInput = useRef(null);
  
    function handleSubmit(e) {
      e.preventDefault();
      alert(`Новый аватар - ${fileInput.current.files[0].name}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Выберите фото:
          <input type="file" ref={fileInput} />
        </label>
        <button type="submit">Сохранить</button>
      </form>
    );
  } 

  export const EmployeeRole = () => {
    const [role, setRole] = useState('designer');
  
    const handleChange = (event) => {
      setRole(event.target.value);
      console.log(role)
    }
    console.log(role)
  
    return (
        <label>
          Ваша роль в проекте:
          <select value={role} onChange={handleChange}>
            <option value="designer">Дизайнер</option>
            <option value="developer">Разработчик</option>
            <option value="teamlead">Тимлид</option>
            <option value="project-manager">Руководитель проекта</option>
          </select>
        </label>
    );
  } 

  export const SelectAppearance = () => {
    const [mode, setMode] = useState('dark');
  
    const onValueChange = (e) => {
      setMode(e.target.value);
    }
  
    const formSubmit = (e) => {
      e.preventDefault();
      console.log(mode)
    }
  
    return (
      <form onSubmit={formSubmit}>
              <div>
          <label>
            <input
              type="radio"
              value="light"
              checked={mode === "light"}
              onChange={onValueChange}
            />
            Светлая тема
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="dark"
              checked={mode === "dark"}
              onChange={onValueChange}
            />
            Тёмная тема
          </label>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }

  export const RememberOnLogIn = () => {
    const [checked, setChecked] = useState(true);

    const onChange = (e) => {
        // Тут у event.target используем свойство checked
        setState(e.target.checked);
    }
  
  return (
    <label>
            Запомнить меня и больше не разлогинивать
      <input
        name="rememberMe"
        type="checkbox"
        checked={checked}
        onChange={onChange} 
            />
        </label>
  );
} 


export const SubscribeSettings = () => {
    const [state, setState] = useState({
    // Соответствует полю ввода subscribed
        subscribed: false,
        // Соответствует полю ввода email
        email: ''
    })

    const handleInputChange = (event) => {
        const target = event.target;
        // Определяем, откуда пришло событие: из чекбокса или текстового поля ввода
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        // Применяем вычисляемые имена свойств
        setState({
      ...state,
          [name]: value
        });
    }
  
  return (
    <form>
      <label>
                Получать уведомления
          <input
            name="subscribed"
            type="checkbox"
            checked={state.subscribed}
            onChange={handleInputChange} 
                />
            </label>
      <label>
                E-mail:
          <input
                    disabled={state.subscribed}
            name="email"
            type="text"
            value={state.email}
            onChange={handleInputChange} 
                />
            </label>
    </form>
  );
} 