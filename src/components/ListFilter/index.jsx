import './style.css'

const ListFilter = ({
  filter,
  handleFilter
}) => {
  return (
    <header className='filter'>
      <h4 className='filter__title'>Resumo financeiro</h4>
      <div>
        <button
          onClick={() => handleFilter('all')}
          className={`filter__option ${filter === 'all' ? 'filter__option--selected' : ''}`}
        >
          Todos
        </button>
        <button
          onClick={() => handleFilter('incomes')}
          className={`filter__option ${filter === 'incomes' ? 'filter__option--selected' : ''}`}
        >
          Entradas
        </button>
        <button
          onClick={() => handleFilter('outgoes')}
          className={`filter__option ${filter === 'outgoes' ? 'filter__option--selected' : ''}`}
        >
          Despesas
        </button>
      </div>
    </header>
  )
}

export { ListFilter }
