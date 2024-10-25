import { useState } from 'react'
import './App.css'
function App() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Psichology', price: 30, photo: '../src/Images/9780756689704_cover.webp' },
    { id: 2, title: 'Poetry', price: 23, photo: '../src/Images/9780744080834_cover.webp' },
    { id: 3, title: 'Literature', price: 18, photo: '../src/Images/9781465491015_cover.webp' },
    { id: 4, title: 'Ecology', price: 12.5, photo: '../src/Images/9781465479587_cover.webp' },
    { id: 5, title: 'Design', price: 90, photo: '../src/Images/9780744098723_cover.webp' },
    { id: 6, title: 'Math', price: 20, photo: '../src/Images/9781615645046_cover.webp' },
    { id: 7, title: 'Philosophy', price: 12, photo: '../src/Images/9780744091960_cover.webp' },
    { id: 8, title: 'Politics', price: 31, photo: '../src/Images/9780593844120_cover.webp' }
  ])
  const [basket, setBasket] = useState([])
  return (
    <>
      <div className="row">
        <div>
          <img src="" alt="" />
          <h3>Products</h3>
          <div className="list">
            {
              products.map(item => {
                return <div key={item.id}>
                  <img src={item.photo} alt={item.title} />
                  <p>{item.title} <strong>{item.price} USD</strong></p>
                  <button>move</button>
                </div>
              })
            }
          </div>
        </div>
        <div>
          <h3>Basket</h3>
        </div>
      </div>
    </>
  )
}

export default App