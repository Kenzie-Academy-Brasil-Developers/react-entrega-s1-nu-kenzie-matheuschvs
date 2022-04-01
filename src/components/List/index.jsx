import { Card } from '../Card'

import './style.css'

const List = ({
  filteredList,
  transactionsList,
  setTransactionsList
}) => {
  return (
    <ul>
      {filteredList.map((transaction, index) => (
        <Card
          transaction={transaction}
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
          key={index}
        />
      ))}
    </ul>
  )
}

export { List }
