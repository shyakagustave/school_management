import { Link } from "react-router-dom";


function Layout(){
    return (
<>
    

        <div className="container">
        <div className="menu">
          <h1 className="tittle"></h1>
          <div className="menulist">
            <h2 className="menutitle">SMS</h2>
            <ul> 
              <li><Link to="/">Home</Link></li>
            <li><Link to="/teachers">Teachers</Link></li>
           <li> <Link to="/courses">Courses</Link></li>
           <li> <Link to="/students">Students</Link></li>
           <li> <Link to="/profile">Profile</Link></li>
           <li> <Link to="/logout">logout</Link></li>
            </ul>
    
           
          </div>
        </div>
       
    
      
      </div>
      </>
    )
}

export default Layout;