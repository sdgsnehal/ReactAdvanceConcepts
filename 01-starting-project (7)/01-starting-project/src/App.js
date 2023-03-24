import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData,fetchCartData } from "./store/cart-action";
let isInitial=true;

function App() {
  const cart = useSelector((state) => state.ui.cartIsVisible);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
useEffect(()=>{
  dispatch(fetchCartData());
},[dispatch])

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));

    }
    
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
