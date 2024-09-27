import { useContext, useEffect, useState } from 'react';
import './Home.css'
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';


const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) =>{
    setInput(event.target.value);
    if(event.target.value === ""){
        setDisplayCoin(allCoin)
    }
}

const searchHandler= async (event)=>{
  event.preventDefault();
  const coins = await allCoin.filter((item)=>{
      return (
        item.name.toLowerCase().includes(input.toLowerCase())
      )
  })
  setDisplayCoin(coins)
}

  useEffect(()=> {
    setDisplayCoin(allCoin);
  }, [allCoin])


  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br/><span style={{color: "#D4AF37"}}>Crypto</span> Marketplace</h1>
            <p>Welcome to the Cryptoverse. Sign up to explore more about <span style={{color: "#DAA520"}}>₿</span> Coins 💰🤑</p>
            <form onSubmit={searchHandler}>
                <input onChange={inputHandler} list='coinList' value={input} type='text' placeholder='Search Any Crypto' required/>

                <datalist id='coinList'>
                    {allCoin.map((item, index)=>(<option key={index} value={item.name}/>))}
                </datalist>

                <button type='submit'>Search</button>
            </form>
            <div className="crypto-table">
                <div className="table-layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Symbol</p>
                    <p>Price</p>
                    <p style={{textAlign: 'center'}}>24H Change</p>
                    <p className='market-cap'>Market Cap</p>
                </div>
                {
            displayCoin.slice(0,10).map((item, index)=>(
                <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                    <p>{item.market_cap_rank}</p>
                    <div className='coin-name'>
                        <img src={item.image} alt='coin-image'/>
                        <p>{item.name}</p>
                    </div><p>{item.symbol}</p>
                    <p>{currency.symbol} {item.current_price}</p>
                    <p className={item.price_change_percentage_24h > 0 ? "green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}%</p>
                    <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>

                </Link>
            ))
            }
            </div>
    </div>
    </div>
  )
}

export default Home