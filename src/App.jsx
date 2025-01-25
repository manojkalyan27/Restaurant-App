import './App.css';
import Sidebar from './Components/Sidebar/sidebar';
import Navbar from './Components/navbar/navbar'
import Herosection from './Components/HeroSection/herosection'
import Menubar from './Components/MenuSection/menubar'
import Bill from './Components/Orders/bill'

function App() {
  return (
    <div className='main_content'>
      <div className='side'>
        <Sidebar />    
      </div>
      <div> 
       <Navbar />
       <Herosection />
       <Menubar />
      </div> 

      <Bill />
    </div>
  )
}

export default App
