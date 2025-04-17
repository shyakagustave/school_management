import './teachers.css';

function Teachers() {
  return (
   
    <>

    
    <div className='s'>
      <h1>ADD NEW TEACHER</h1>
    </div>
    
      <div className='form-group'>

      
      <form>
        <label>name</label><br/>
        <input type='text' name='name' required></input><br></br>
        <label>age</label><br/>
        <input type='text' name='name' required></input><br></br>
        <label>level</label><br/>
        <input type='text' name='name' required></input><br></br>
      

        <button>save</button>
        </form>
      </div>

      <div>
    
    <div className='one'>

      <table border={1}>
      
      <tr>
        <th>NO</th>
        <th>name</th>
        <th>age</th>
        <th>level</th>
      </tr>

      <tr>
        <td>1</td>
        <td>shyaka</td>
        <td>24</td>
        <td>level5</td>
      </tr>
      </table>
    </div>
      </div>
  
    </>
  );
}

export default Teachers;