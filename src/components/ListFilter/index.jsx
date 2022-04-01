import './style.css'

const ListFilter = () => {
  return (
    <header className='filter'>
      <h4 className='filter__title'>Resumo financeiro</h4>
      <div>
        <button className='filter__option'>Todos</button>
        <button className='filter__option'>Entradas</button>
        <button className='filter__option'>Despesas</button>
      </div>
    </header>
  )
}

export { ListFilter }
