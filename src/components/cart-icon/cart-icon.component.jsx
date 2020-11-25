import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';

import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleCartHidden,itemCount}) => {
    return ( 
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
        </div>
     );
}

const mapStateToProps = (state) =>{
    console.log("cart is called");
    return {itemCount:selectCartItemsCount(state)}
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) ;