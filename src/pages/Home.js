import React, { useState, useEffect } from 'react';
import HTTPClient from '../server';

import '../App.css';
//import Home from './pages/Home';

import { Link } from 'react-router-dom';


function Home() {
  const [loading, setLoading] = useState(true);
  const [totalValue, setTotalValue] = useState(0);
  const [mountCart, setMounCart] = useState([]);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    setLoading(true);

    try {
      const { data } = await HTTPClient.get('/products');
      setProducts(data);
    } catch (e) {
      console.log(e, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getAllProducts();
    }, 2000);
  }, []);

  const handleAddNewProduct = (product) => {
    setMounCart((prevState) => [...prevState, product]);
  };

  const handleClear = () => {
    setMounCart([]);
    setTotalValue(0);
  };

  useEffect(() => {
    if (mountCart.length) {
      const total = mountCart.reduce(
        (acc, current) => acc + parseInt(current.value),
        0
      );
      setTotalValue(total);
    }
  }, [mountCart]);

  return (
    <>
      <header>
        <Link to='/Cadastro'>Cadastro</Link>
        
        <nav className="cabeca">
          <img alt="QWE" src="Logo.png" className="car" />
          <nav className="valorebotao">
            <div className="valortotal">
              <span>
                <b>Valor Total</b>
              </span>
              <p id="real">
                <b>{totalValue},00</b>
              </p>
            </div>

          
            <button className="botaolimpa" onClick={handleClear}>
              <b>Limpar</b>
            </button>
          </nav>
        </nav>
      </header>

      <main>
        <div>
          {loading ? (
            <h1>Carregando...</h1>
          ) : (
            <section className="cards">
              {products.map((product) => (
                <div key={product.id} className="cardsind">
                  <div>
                    <img alt="QWEQW" className="imagens" src={product.image} />
                  </div>

                  <span>
                    {product.title}
                    <p>R$ {product.value}</p>
                  </span>

                  <button
                    className="botaoadd"
                    onClick={() => handleAddNewProduct(product)}
                  >
                    <b>Adicionar</b>
                  </button>
                </div>
              ))}
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
