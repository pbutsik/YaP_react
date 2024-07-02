import './App.css'
import { ChangeColor } from './ChangeColor'
import { MyClock } from './Clock'
import { Counter } from './Counter'
import { AvatarInput, BlogpostTitleInput, EmployeeRole, Input, NewMessage, RememberOnLogIn, SelectAppearance, SubscribeSettings } from './Forms'
import { ThemeToggle } from './ThemeTogle'


function App() {
  return (
  <div>
      <ThemeToggle/>
      <Counter/>
      <MyClock/>
      <ChangeColor/>

      <Input/>
      <NewMessage/>
      <BlogpostTitleInput/>
      <AvatarInput/>
      <EmployeeRole/>
      <SelectAppearance/>
      <RememberOnLogIn/>
      <SubscribeSettings/>
  </div>
    
  )
}


export default App
