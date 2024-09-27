import './Navbar.css'
import Logo from "../../assets/logo.png"
import arrow from "../../assets/arrow.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'


const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event)=>{
        switch (event.target.value){
            case "usd":{
                setCurrency({name:"usd", symbol:"$"});
                break;
            }
            case 'eur':{
                setCurrency({name:"eur",symbol:"Є"});
                break;
            }
            case 'pkr':{
                setCurrency({name:"pkr", symbol:"Rs."});
                break;
            }
            case 'inr':{
              setCurrency({name:"inr", symbol:"₹"});
              break;
          }
            default : {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
        }

    }

  return (
    <div className='navbar'>
        <Link to='/'><img className='logo' src={Logo} alt='Cryptoverse' /></Link>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/features'>Features</Link></li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="navbar-right">
            <select  onChange={currencyHandler}>
                <option value='usd'>USD</option>
                <option value='eur'>EURO</option>
                <option value='pkr'>PKR</option>
                <option value='inr'>INR</option>
            </select>
            <ul>
              <li>Login</li>
            </ul>
            <button>Sign up<img src={arrow} alt='arrow'/></button>
        </div>
    </div>
  )
}

export default Navbar