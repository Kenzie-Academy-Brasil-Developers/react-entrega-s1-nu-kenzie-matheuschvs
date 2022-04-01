import { useState } from 'react'

import './style.css'

const ListFilter = ({
  transactionsList,
  setFilteredList
}) => {
  const [filter, setFilter] = useState('all')

  function handleFilterAll() {
    setFilteredList(transactionsList)
    setFilter('all')
  }

  function handleFilterIncomes() {
    const incomes = transactionsList.filter(
      transaction => transaction.type === 'Entrada'
    )

    setFilteredList(incomes)
    setFilter('incomes')
  }

  function handleFilterOutgoes() {
    const outgoes = transactionsList.filter(
      transaction => transaction.type === 'Despesa'
    )

    setFilteredList(outgoes)
    setFilter('outgoes')
  }

  return (
    <header className='filter'>
      <h4 className='filter__title'>Resumo financeiro</h4>
      <div>
        <button
          onClick={handleFilterAll}
          className={`filter__option ${filter === 'all' ? 'filter__option--selected' : ''}`}
        >
          Todos
        </button>
        <button
          onClick={handleFilterIncomes}
          className={`filter__option ${filter === 'incomes' ? 'filter__option--selected' : ''}`}
        >
          Entradas
        </button>
        <button
          onClick={handleFilterOutgoes}
          className={`filter__option ${filter === 'outgoes' ? 'filter__option--selected' : ''}`}
        >
          Despesas
        </button>
      </div>
    </header>
  )
}

export { ListFilter }
