import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropDownComponent,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropDownComponent>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Link to='/checkout'>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropDownComponent>
  );
};

export default CartDropdown;
