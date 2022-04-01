import { Card } from '../Card'

import './style.css'

const List = ({ transactionsList }) => {
  return (
    <ul>
      {transactionsList.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </ul>
  )
}

export { List }
