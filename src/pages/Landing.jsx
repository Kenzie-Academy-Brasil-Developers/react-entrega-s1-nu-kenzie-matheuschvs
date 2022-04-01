import { Link } from 'react-router-dom'

import logo from '../assets/white-logo.svg'
import hero from '../assets/hero.svg'

import './landing.css'

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing__left-container'>
        <figure className='landing-logo'>
          <img className='landing-logo__image' src={logo} alt='Nu Kenzie Logo' />
          <figcaption className='landing-logo__caption'>
            Nu Kenzie Logo
          </figcaption>
        </figure>
        <h1 className='landing__title'>Centralize o controle das suas finanças</h1>
        <p className='landing__description'>de forma rápida e segura</p>
        <Link className='landing__link' to='/home'>Iniciar</Link>
      </div>
      <figure className='landing-hero'>
        <img className='landing-hero__image' src={hero} alt='Nu Kenzie hero' />
        <figcaption className='landing-hero__caption'>
          Layout simple examples
        </figcaption>
      </figure>
    </section>
  )
}

export { Landing }
