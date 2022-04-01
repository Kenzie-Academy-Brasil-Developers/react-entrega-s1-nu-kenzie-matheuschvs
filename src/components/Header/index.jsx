import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

const Header = () => {
  return (
    <header className='page-header'>
      <figure className='page-logo'>
        <img className='page-logo__image' src={logo} alt='Nu Kenzie Logo' />
        <figcaption className='page-logo__caption'>
          Nu Kenzie Logo
        </figcaption>
      </figure>
      <Link to='/' className='page-header__button'>
        Inicio
      </Link>
    </header>
  )
}

export { Header }
