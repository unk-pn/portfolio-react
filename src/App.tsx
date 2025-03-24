// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Input, TextArea } from './components'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Input placeholder={'Full name'} name='fullname'/>
    <Input placeholder={'Telegram Username'} name='tgusername'/>
    
    <TextArea />
    </>
  )
}

export default App
