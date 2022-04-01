import './style.css'

const TotalMoney = ({ transactionsList }) => {
  const total = transactionsList.reduce(
    (acc, transaction) => acc += +transaction.value, 0
  )

  return (
    <section className='total'>
      <span>
        <h4 className='total__title'>Valor total:</h4>
        <p className='total__bottom'>O valor se refere as entradas</p>
      </span>
      <p><b className='total__value'>$ {Math.round(total)}</b></p>
    </section>
  )
}

export { TotalMoney }
