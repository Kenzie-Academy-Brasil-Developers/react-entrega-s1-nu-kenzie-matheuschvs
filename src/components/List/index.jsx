import { Card } from '../Card'
import { EmptyCard } from '../EmptyCard'

import './style.css'

const List = ({
  filteredList,
  transactionsList,
  setTransactionsList
}) => {
  return (
    <ul>
      {
        filteredList.length > 0 ?
          filteredList.map((transaction, index) => (
            <Card
              transaction={transaction}
              transactionsList={transactionsList}
              setTransactionsList={setTransactionsList}
              key={index}
            />
          )) :
          <>
            <p className='empty-message'>Você ainda não possui nenhum lançamento</p>
            <EmptyCard />
            <EmptyCard />
            <EmptyCard />
          </>
      }
    </ul>
  )
}

export { List }
