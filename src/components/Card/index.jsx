import trashIcon from '../../assets/trash.svg'
import whiteTrashIcon from '../../assets/white-trash.svg'

import './style.css'

const Card = ({
  transaction,
  transactionsList,
  setTransactionsList
}) => {
  function handleRemoveCard() {
    const newTransactions = transactionsList.filter(
      currTransaction => currTransaction !== transaction
    )

    setTransactionsList(newTransactions)
  }

  return (
    <li
      className={`list-item ${transaction.type === 'Entrada' ? 'list-item--income' : ''}`}
    >
      <div className='top-wrapper'>
        <h4
          className='list-item__title'
        >{transaction.description}</h4>
        <p className='list-item__amount'>
          {
            Intl.NumberFormat(
              'pt-BR',
              { style: 'currency', currency: 'BRL' }
            ).format(transaction.value)
          }
        </p>
        <button
          onClick={handleRemoveCard}
          className='list-item__remove'
          onMouseOver={e => (e.currentTarget.childNodes[0].src = whiteTrashIcon)}
          onMouseLeave={e => (e.currentTarget.childNodes[0].src = trashIcon)}
        >
          <img
            src={trashIcon}
            alt='trash'
          />
        </button>
      </div>
      <p className='list-item__type'>
        {transaction.type}
      </p>
    </li>
  )
}

export { Card }
