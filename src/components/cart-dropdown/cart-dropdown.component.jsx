import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropDownComponent,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

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
