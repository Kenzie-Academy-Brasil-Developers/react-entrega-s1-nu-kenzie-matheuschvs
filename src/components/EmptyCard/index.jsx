import './style.css'

const EmptyCard = () => {
  return (
    <li
      className='list-item--empty'
    >
      <div className='top-rectangle'></div>
      <div className='bottom-rectangle'></div>
    </li>
  )
}

export { EmptyCard }
