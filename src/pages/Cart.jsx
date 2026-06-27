import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import Modal from "../components/Modal.jsx";
import "./Cart.scss";

function Cart() {
  const { cartItems, removeProduct, clearCart, totalAmount } =
    useContext(CartContext);
  const { t } = useContext(LanguageContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setIsSubmitted(true);
  };

  return (
    <section className="cart-page">
      <h2>{t.cartTitle}</h2>
      {cartItems.length === 0 ? (
        <p>{t.emptyCart}</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {t.qtyLabel}: {item.quantity}
                  </p>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                <button onClick={() => removeProduct(item.id)}>
                  {t.removeItem}
                </button>
              </article>
            ))}
          </div>

          <div className="cart-summary">
            <p>
              {t.total}: ${totalAmount.toFixed(2)}
            </p>
            <button className="checkout-button" onClick={handleCheckout}>
              {t.checkout}
            </button>
          </div>
        </>
      )}
      <Modal open={isSubmitted} onClose={() => setIsSubmitted(false)}>
        <h2>{t.orderConfirmed}</h2>
        <p>{t.orderSuccess}</p>
        <button onClick={() => setIsSubmitted(false)}>{t.modalClose}</button>
      </Modal>
    </section>
  );
}

export default Cart;
