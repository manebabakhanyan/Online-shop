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
  const moveToCard = (product) => {
    setBasket(prev => {
      let found = prev.find(item => item.id == product.id)
      if (!found) {
        return [...prev, { ...product, quantity: 1 }]
      }
      else {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    })
  }
  const incrementQuantity = (id) => {
    setBasket(prev => 
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  const decrementQuantity = (id) => {
    setBasket(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
  const removeFromCard = id => {
    setBasket(prev => prev.filter(el => el.id !== id))
  }
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
                  <button onClick={() => moveToCard(item)}>move</button>
                </div>
              })
            }
          </div>
        </div>
        <div>
          <h3>Basket</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map(item => <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.price} USD</td>
                  <td>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <button onClick={() => removeFromCard(item.id)}>x</button>
                  </td>
                </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App