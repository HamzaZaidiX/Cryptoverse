import { Link } from 'react-router-dom'
import './Footer.css'
import { HeartIcon } from '../Icon'

const Footer = () => {
  return (
    <div>
       <div className='footer'>
       <ul>
            <li>Terms & Privacy</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
        </ul>

        <p>Copyright  @ 2024, <Link to='/'>Cryptoverse</Link> - All Rights Reserved </p>
        <p>Build with <HeartIcon /> By <Link to="https://github.com/HamzaZaidiX"><span style={{color: "#DAA520", fontWeight: 'bold', textDecorationLine: 'spelling-error'}}> Hamza Zaidi</span></Link></p>
    </div>
    </div>
  )
}

export default Footer
