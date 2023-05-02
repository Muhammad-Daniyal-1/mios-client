import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductContext from '../../context/Product/ProductContext';
import emptyCartImage from '../assets/images/emptycart.png';
import { CartProduct } from "./CartProduct";
import {
    CheckoutButton2,
    CheckoutButtonDiv,
    // EmptyCart, 
    // EmptyCartLink, 
    EmptyImage
} from "./cartStyles";
import UserContext from '../../context/User/UserContext';




const Cart = () => {
    const context = useContext(ProductContext);
    const { Cart, CartItems, setSubTotal } = context;
    const localCart = CartItems;
    const { user } = useContext(UserContext);

    useEffect(() => {
        Cart();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const subTotalD = (cart) => {
        let subTotal = 0;
        cart.forEach((item) => {
            subTotal += item.product.discountedPriceD > 0 ? item.product.discountedPriceD * item.quantity : item.product.dropshipperPrice * item.quantity;
        });
        return subTotal;
    }
    const subTotalW = (cart) => {
        let subTotal = 0;
        cart.forEach((item) => {
            subTotal += item.product.discountedPriceW > 0 ? item.product.discountedPriceW * item.quantity : item.product.wholesalePrice * item.quantity;
        });
        return subTotal;
    }
    const subTotl = localCart !== null ? (user.role === "dropshipper" ? subTotalD(localCart.cart) : subTotalW(localCart.cart)) : null;
    setSubTotal(subTotl);


    return (
        <>
            <h2 className="text-center">Cart</h2>
            {localCart === null ? (
                <div>
                    {/* <p style={{ color: "rgb(88,88,88)", fontSize: "14px" }}>
                        Nothing to see here yet! Sign in to see items that you've previously
                        placed in your Cart or check out all the awesome things you can buy on
                        MIOS.pk
                    </p> */}
                    {/* <EmptyCart>
                        <EmptyCartLink to="/sign-in">Sign In</EmptyCartLink>
                        <EmptyCartLink to="/">Home Page</EmptyCartLink>
                        <EmptyCartLink to="/brands">Brand List</EmptyCartLink>
                        <EmptyCartLink to="/contact-us">Contact Us</EmptyCartLink>
                    </EmptyCart> */}
                    <EmptyImage>
                        <img
                            className="emptyCartImage"
                            //have to add an image here
                            src={emptyCartImage}
                            alt="image1"
                        />
                        <br />
                        <Link to="/" ><button>Shop Now</button></Link>
                    </EmptyImage>
                </div>
            ) : (
                <div>
                    <div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" >Product Image</th>
                                    <th scope="col" >Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {localCart.cart.map((el, index) => {
                                    return (
                                        <CartProduct Data={el} key={index + 1} />
                                    )
                                })}
                                <tr>
                                    <td colSpan="4" className="text-end"><h5><b>Subtotal</b></h5></td>
                                    <td><h5><b>Rs.{subTotl}</b></h5></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-end mt-4">

                        <Link to={"/checkout"} className="btn btn-primary">
                            
                                PROCEED TO CHECKOUT
                           
                        </Link>
                    </div>
                    
                </div>
            )}
        </>
    );


};

export default Cart;


