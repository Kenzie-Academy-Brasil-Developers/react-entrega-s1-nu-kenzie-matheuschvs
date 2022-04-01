import { useEffect, useState } from 'react'

import { Header } from '../components/Header'
import { Form } from '../components/Form'
import { TotalMoney } from '../components/TotalMoney'
import { ListFilter } from '../components/ListFilter'
import { List } from '../components/List'

import './home.css'

const Home = () => {
  const [filter, setFilter] = useState('all')
  const [transactionsList, setTransactionsList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    handleFilter(filter)
  }, [filter, transactionsList])

  function handleFilter(option) {
    if (option === 'all') {
      setFilteredList(transactionsList)
      setFilter('all')
    } else if (option === 'incomes') {
      const incomes = transactionsList.filter(
        transaction => transaction.type === 'Entrada'
      )

      setFilteredList(incomes)
      setFilter('incomes')
    } else {
      const outgoes = transactionsList.filter(
        transaction => transaction.type === 'Despesa'
      )

      setFilteredList(outgoes)
      setFilter('outgoes')
    }
  }

  return (
    <>
      <Header />
      <main className='home__main'>
        <div className='home__left-wrapper'>
          <Form
            filter={filter}
            handleFilter={handleFilter}
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
          />
          <TotalMoney
            transactionsList={filteredList}
          />
        </div>
        <div>
          <ListFilter
            filter={filter}
            handleFilter={handleFilter}
          />
          <List
            filteredList={filteredList}
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
          />
        </div>
      </main>
    </>
  )
}

export { Home }
