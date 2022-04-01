import trashIcon from '../../assets/trash.svg'

import './style.css'

const Card = ({ transaction }) => {
  return (
    <li className='list-item'>
      <h4>{transaction.description}</h4>
      <p>{transaction.type}</p>
      <p>
        {
          Intl.NumberFormat(
            'pt-BR',
            { style: 'currency', currency: 'BRL' }
          ).format(transaction.value)
        }
      </p>
      <button>
        <img src={trashIcon} alt='trash' />
      </button>
    </li>
  )
}

export { Card }
