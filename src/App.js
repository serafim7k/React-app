import { useState } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CountFn from './CountFn';

function App() {

  let [ products, setProducts ] = useState(productsItem());

  let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);

  let setCnt = (id, cnt) => {
    setProducts(products.map(pr => pr.id !== id ? pr : ({...pr, cnt})))
  }

  let removeProduct = (id) => {
    setProducts(products.filter(el => el.id !== id))
  }


return (
  <div className="App">
    <header className="App-header">
      <h2>Class max=5</h2>
      <CounterClass  max={5}/>
      <h2>Class max=10</h2>
      <CounterClass max={10} />
      <h2>Function max=10</h2>
      <CountFn min={0} max={7}/>
    </header>
    <hr/>
    <br/>
    <hr />
  <main>
      <section className="product">
          <h1>Products list</h1>
          <table border="1">
              <tbody >
                  <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Cnt</th>
                      <th>Total</th>
                  </tr>
                  {products.map((pr, i) => (
                      <tr key={pr.id}>
                          <td>{i + 1}</td>
                          <td>{pr.title}</td>
                          <td>{pr.price}</td>
                          <td>
                              <CountFn min={1} max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)}/>
                          </td>
                          <td>
                            {pr.price * pr.cnt}
                          </td>
                          <tb>
                            <button type='button' onClick={() => removeProduct(pr.id)}>X</button>
                          </tb>
                      </tr>
                  ))}
              </tbody>
          </table>
          <hr/>
          <p>{total}</p>

      </section>
  </main>

  <footer>

  </footer>

  </div>
);
}


export default App;

function productsItem() {
  return[
    {
      id: 1,
      title: "Iphone",
      price: 35000,
      rest: 5,
      cnt: 5,
    },
    {
      id: 2,
      title: "Samsung",
      price: 6000,
      rest: 10,
      cnt: 10,
    },
    {
      id: 3,
      title: "Nokia",
      price: 7000,
      rest: 7,
      cnt: 7,
    },
    {
      id: 4,
      title: "Huawei",
      price: 10000,
      rest: 6,
      cnt: 6,
    },
  ]
}