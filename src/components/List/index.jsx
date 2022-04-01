import { Card } from '../Card'

import './style.css'

const List = ({
  transactionsList,
  setTransactionsList
}) => {
  return (
    <ul>
      {transactionsList.map((transaction, index) => (
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
