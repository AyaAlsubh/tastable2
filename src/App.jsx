
import { Alert } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import './App.css'
function App(){
  const[name, setName]=useState('');
  const[email, setEmail]=useState('')
  const[phone, setPhone]=useState('')
  const[data, setData]=useState([])

  const handleSubmit=()=>{
    if (name&&phone&&email)

    setData((prevData) => [...prevData, { name, email, phone }])
  else {
  alert('Please fill in all fields');
}
  setName('')
  setEmail('')
  setPhone('')
  

  }


 
  
  return (
    <>
    <div className='App'>
        <div>
          
          <input type="text" name='text1' id='text1'  placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} /></div>


        <div><br/>
         
          <input type="text" name='text2' id='text2' placeholder="enter your email"  value={email} onChange={(e) => setEmail(e.target.value)} />
        </div><br/>
        <div>
          
          <input type="text" name='text3' id='text3' placeholder="enter your phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        </div><br/>
        <button className='bt ' onClick={handleSubmit}>Done</button>
        <br/> <br/>
        <p className='p'></p>

        <table className='t'>
          <thead>
         
            <tr >
              <th>Name</th> 
              
              <th>Email</th>
              <th>Phone</th>
            </tr>
            </thead>
         
          <tbody>
            {data.map((item, index) => (
              <tr key={index} >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>))}
          </tbody>




        </table>
      </div>

      
    </>
  )
            }

export default App
