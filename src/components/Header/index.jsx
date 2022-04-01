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
      <button className='page-header__button'>Inicio</button>
    </header>
  )
}

export { Header }
