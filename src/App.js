import './style.css';
import Layout from './layout/layout'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Teachers from './pages/teachers';
import Home from './pages/home';
import Courses from './pages/courses';
import Students from './pages/students';
import Profile from './pages/profile';
import Logout from './pages/logout';


function App() {
  return (
<>



  <BrowserRouter>
 
 
  <Layout/>


    <Routes>
      <Route path="/" element={<Home/>}/>
     
      <Route path="/Teachers" element={<Teachers/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/Students" element={<Students/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Logout" element={<Logout/>}/>
      
    </Routes>
      </BrowserRouter>

      <div className='footer'>
          <p>sms footer</p>
        </div>
     
</>
    
  )
}

export default App;
