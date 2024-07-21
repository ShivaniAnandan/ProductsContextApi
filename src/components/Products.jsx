import React, { useContext } from 'react';
import { myContext } from '../App';
import './Products.css';

const Products = ({ products }) => {
  const [cart, setCart] = useContext(myContext);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id!== product.id);
    setCart(updatedCart);
  };

  return (
    <div className="products-container">
      <div className="container">
        <div className="row">
          {products.map((item) => {
            const isInCart = cart.some((cartItem) => cartItem.id === item.id);
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                <div className="card product-card">
                  <div className="card-body">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top product-image"
                    />
                    <h5 className="card-title product-title">{item.title}</h5>
                    <p className="product-description">{item.description}</p>
                    <p className="product-price">Rs. {item.price}</p>
                    {isInCart? (
                      <button onClick={() => removeFromCart(item)} className='btn btn-dark product-button'>Remove from Cart</button>
                    ) : (
                      <button onClick={() => addToCart(item)} className='btn btn-dark product-button'>Add to Cart</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
