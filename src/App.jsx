import './App.css'
import users from './data/users.json'
import { useState,useEffect  } from 'react'
import React from 'react'

function App() {
  
  let userRandom = () =>  Math.floor(Math.random() * users.length) 
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]
  
  let [user, setUser] = useState(0)
  
  
  const randomIndex = Math.floor(Math.random() * colors.length)

  useEffect(() =>{
  randomIndex;
  document.body.style = `background-color: ${colors[randomIndex]}` 
  }, [user])
    
  
  
  
  console.log(users);
  return (
    <div className="App">
      <div className='Users'>
        <div className='User_name'>
        <h1 style={{color:colors[randomIndex]}}>{users[user].name.title}</h1>
        <h1 style={{color:colors[randomIndex]}}>{users[user].name.first}</h1>
        <h1 style={{color:colors[randomIndex]}}>{users[user].name.last}</h1><br />
        </div>
        <div className='User_img'>
        <img src={users[user].picture.large} alt="" /><br />
        </div>
        <div className='User_data'>
        <p style={{color:colors[randomIndex]}}><i class='bx bxs-envelope'></i>  {users[user].email}</p>
        <p style={{color:colors[randomIndex]}}><i class='bx bxs-phone'></i>  {users[user].phone}</p>
        <p style={{color:colors[randomIndex]}}><i class='bx bxs-map' ></i>  {users[user].location.country} {users[user].location.state} {users[user].location.city}</p><br />
        </div>
        <div className='User_icons'>
          <div className='User_icons_item' style={{color:colors[randomIndex]}}>
          <i class="fa-solid fa-shuffle" onClick={() => setUser(user = userRandom)  }  ></i>
        </div>
        
        </div>
        </div>
      </div>
        
  )
}

export default App
