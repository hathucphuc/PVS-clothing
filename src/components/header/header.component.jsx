import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assests/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUSer } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const Header = ({currentUser, hidden}) => {
    
    return ( 
        <div className="header">
            <Link to="/" className="logo-container">
                <h1 style={{fontSize:25,fontWeight:700}}>PVS</h1>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    ABOUT
                </Link>
                
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/sign-in">
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown /> }
        </div>
     );
}
 

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUSer,
    hidden:selectCartHidden

    });
export default connect(mapStateToProps)(Header) ;