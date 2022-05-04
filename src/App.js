import {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './Components/Coins'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Coin from './Routes/Coin'


function App() {
  const [coins , setCoins] = useState([])
  useEffect(() => {
   axios
   .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
     .then(res => {
       setCoins(res.data)
       console.log(res.data[0])
 
 }).catch(err => alert('error'))
   
  }, [])

  
  
  return (
    <>
      <div className="crypto-app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Coins coins={coins} />} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin/>}/>
            </Route>
       </Routes>
        
      </div>
    </>
  )
}

export default App;
