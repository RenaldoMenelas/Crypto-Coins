import './Coins.css'
import React from 'react'
import CoinItems from './CoinItems'
import { Link } from 'react-router-dom'
import Coin from '../Routes/Coin'


const Coins = (props) => {
    return (
        <div className="container">
            <div className="heading">
                <p>#</p>
                <p className="coin-name">coin</p>
                <p>price</p>
                <p>24hr</p>
                <p className="hide-mobile" >Volume</p>
                <p className="hide-mobile">Mkt Cap</p>
                
          </div>
            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        
                        <CoinItems
                        coins={coins} 
                    />
                    </Link>
                   

                )
                
                
            })}
        </div>
    )
}

export default Coins
