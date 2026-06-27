import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import Modal from "./Modal.jsx";
import "./ProductCard.scss";

function ProductCard({ product }) {
  const { addProduct } = useContext(CartContext);
  const { t } = useContext(LanguageContext);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    addProduct(product);
    setShowModal(true);
  };

  return (
    <motion.article className="product-card" whileHover={{ y: -5 }}>
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <strong>${product.price.toFixed(2)}</strong>
      </div>
      <button type="button" onClick={handleAdd}>
        {t.addToCart}
      </button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h2>{t.addedProduct}</h2>
        <p>
          {product.title} {t.productAddedMessage}
        </p>
        <button onClick={() => setShowModal(false)}>{t.modalClose}</button>
      </Modal>
    </motion.article>
  );
}

export default ProductCard;
