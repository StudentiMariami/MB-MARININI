import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./Home.scss";

function Home() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="home-page">
      <div className="hero-card">
        <h2>{t.homeTitle}</h2>
        <p>{t.homeSubtitle}</p>
        <div className="hero-actions">
          <Link className="button" to="/products">
            {t.browseProducts}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
