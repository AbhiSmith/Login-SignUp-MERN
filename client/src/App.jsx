import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (

   
   <BrowserRouter>
    
    <Routes>
       <Route path='/home' element={<Home/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes> 
   
   </BrowserRouter>
   

  )
}

export default App
