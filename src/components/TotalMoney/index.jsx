import { useEffect } from 'react'
import './style.css'

const TotalMoney = ({ transactionsList }) => {
  useEffect(() => { console.log('tl: ', transactionsList) }, [transactionsList])

  const total = transactionsList.reduce(
    (acc, transaction) => {
      if (transaction.type === 'Entrada')
        return acc += +transaction.value

      return acc -= +transaction.value
    }, 0
  )

  return (
    <section className={`total ${transactionsList.length > 0 ? '' : 'total--hidden'}`}>
      <span>
        <h4 className='total__title'>Valor total:</h4>
        <p className='total__bottom'>O valor se refere as entradas</p>
      </span>
      <p><b className='total__value'>$ {Math.round(total)}</b></p>
    </section>
  )
}

export { TotalMoney }
