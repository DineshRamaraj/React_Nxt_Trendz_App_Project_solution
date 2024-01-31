import CartContext from '../../context/CartContext'
import './index.css'

// Write your code here

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const lengthOfCartList = cartList.length

      const filteredList = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )
      let orderTotalPrice = 0
      for (let i = 0; i < filteredList.length; i += 1) {
        orderTotalPrice += filteredList[i]
      }

      return (
        <div className="order-container">
          <div className="order-product-container">
            <div className="order-title-price-container">
              <h1 className="order-title">Order Total </h1>
              <h1 className="order-price-heading">Rs {orderTotalPrice} /-</h1>
            </div>
            <p className="order-item-hint">{lengthOfCartList} items in cart</p>
            <button
              type="button"
              className="order-item-button"
              // onClick={onClickCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
