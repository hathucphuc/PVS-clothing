import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropDown = ({cartItems, history,dispatch}) => {
    
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => (<CartItem item={cartItem} key={cartItem.id}/>))
                    : (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={()=> {
                history.push("/checkout");
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
     );
}

const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
});

 
export default withRouter(connect(mapStateToProps)(CartDropDown));