 
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'

function App() {
 
  return (
    <div className='bg-black'>

    <div className='max-w-xl mx-auto '>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default App
