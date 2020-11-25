import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const onToken = token => {
    
    alert("Payment Successfull");
}

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HrQEkHKFlyXr0PJs3ptZOl52KGkMv1xZd0wFnarDhOeDbgwTRuXQtbXACLaIrpHjQ9FvSLvaCfawNp1NOlMzXCa00bOZWrfcw'
    return ( 
        <div>
            <StripeCheckout 
                label="Pay Now"
                name="PVS Clothing Ltd."
                billingAddress
                shippingAddress
                image="https://svgshare.com/i/CUz.svg"
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
     );
}
 
export default StripeCheckOutButton;