import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import plantImg from './assets/plant.jpg';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 15, image: plantImg },
      { name: 'Spider Plant', cost: 12, image: plantImg },
      { name: 'Peace Lily', cost: 18, image: plantImg },
      { name: 'Boston Fern', cost: 20, image: plantImg },
      { name: 'Rubber Plant', cost: 17, image: plantImg },
      { name: 'Aloe Vera', cost: 14, image: plantImg },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', cost: 20, image: plantImg },
      { name: 'Jasmine', cost: 18, image: plantImg },
      { name: 'Mint', cost: 12, image: plantImg },
      { name: 'Lemon Balm', cost: 14, image: plantImg },
      { name: 'Hyacinth', cost: 22, image: plantImg },
      { name: 'Chamomile', cost: 15, image: plantImg },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { name: 'Oregano', cost: 10, image: plantImg },
      { name: 'Marigold', cost: 8, image: plantImg },
      { name: 'Geraniums', cost: 20, image: plantImg },
      { name: 'Basil', cost: 9, image: plantImg },
      { name: 'Catnip', cost: 13, image: plantImg },
      { name: 'Rosemary', cost: 15, image: plantImg },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand">Paradise Nursery</span>
        <div className="navbar-links">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onHomeClick();
            }}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowCart(false);
            }}
          >
            Plants
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowCart(true);
            }}
            aria-label="Cart"
          >
            🛒 <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-list">
          {plantsArray.map((group) => (
            <section key={group.category} style={{ paddingBottom: 32 }}>
              <h2>{group.category}</h2>
              <div className="product-grid">
                {group.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <div>${plant.cost}</div>
                    <button disabled={isInCart(plant.name)} onClick={() => dispatch(addItem(plant))}>
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
