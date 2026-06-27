import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { fetchProducts } from "../services/api.js";
import ProductCard from "../components/ProductCard.jsx";
import "./Products.scss";

function Products() {
  const { t } = useContext(LanguageContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetchProducts()
      .then((data) => {
        if (isMounted) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError(t.errorProducts);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [t.errorProducts]);

  if (loading) {
    return <div className="page-loader">{t.loadProducts}</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section className="products-page">
      <h2>{t.productsTitle}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
