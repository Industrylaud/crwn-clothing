import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	return (
		<div>
			<h1>checkout page</h1>
			<div>
				{cartItems.map((cartItem) => {
					return (
						<div key={cartItem.id}>
							<h2>{cartItem.name}</h2>
							<span>{cartItem.quantity}</span>
							<span onClick={() => removeItemFromCart(cartItem)}>
								decrement
							</span>
							<span onClick={() => addItemToCart(cartItem)}>increment</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Checkout;
