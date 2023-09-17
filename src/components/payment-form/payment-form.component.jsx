import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { FormContainer, PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: 10000
      })
    }).then(res => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Test name'
        }
      }
    })

    if(paymentResult.error){
      alert(paymentResult.error)

      return;
    }

    if (paymentResult.paymentIntent.status === 'succeeded'){
      alert('Payment successful');
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
