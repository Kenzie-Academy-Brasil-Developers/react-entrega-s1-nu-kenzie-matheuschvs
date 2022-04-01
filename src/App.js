import { useState } from 'react'

import './reset.css'
import './global.css'
import './App.css'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { TotalMoney } from './components/TotalMoney'
import { ListFilter } from './components/ListFilter'
import { List } from './components/List'

function App() {
  const [transactionsList, setTransactionsList] = useState([])
  const [filteredList, setFilteredList] = useState(transactionsList)

  return (
    <>
      <Header />
      <main className='home__main'>
        <div>
          <Form
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
          />
          <TotalMoney
            transactionsList={filteredList}
          />
        </div>
        <div>
          <ListFilter
            transactionsList={transactionsList}
            setFilteredList={setFilteredList}
          />
          <List
            transactionsList={filteredList}
            setTransactionsList={setTransactionsList}
          />
        </div>
      </main>
    </>
  )
}

export default App
