import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import AuthDetails from './Components/AuthDetails'
// import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        {/*<Route path='/home' element={<Home/>}></Route> */}
      </Routes>
      <AuthDetails/>
    </>
    
    
  )
}

export default App;
