import { useState } from 'react'

import './style.css'

const Form = ({
  transactionsList,
  setTransactionsList
}) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(1)
  const [type, setType] = useState('Entrada')

  function handleSubmit(formEvent) {
    formEvent.preventDefault()

    const data = {
      description,
      type,
      value: amount
    }

    setTransactionsList([...transactionsList, data])
    setDescription('')
    setAmount(1)
    setType('Entrada')
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label
        className='form__label'
        htmlFor='description'
      >
        Descrição
      </label>
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className='form__description'
        type='text'
        id='description'
        placeholder='Digite aqui sua descrição'
      />
      <p
        className='form__example'
      >Ex: Compra de roupas</p>
      <span className='amount-wrapper'>
        <label
          className='form__label'
          htmlFor='amount'
        >Valor</label>
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className='form__amount'
          id='amount'
          type='number'
        />
      </span>
      <span className='type-wrapper'>
        <label
          className='form__label'
          htmlFor='type'
        >Tipo de valor</label>
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className='form__type'
          id='type'
        >
          <option value='Entrada'>entrada</option>
          <option value='Despesa'>saída</option>
        </select>
      </span>
      <button className='form__submit' type='submit'>
        Inserir valor
      </button>
    </form>
  )
}

export { Form }
