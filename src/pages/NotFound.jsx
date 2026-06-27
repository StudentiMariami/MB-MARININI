import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./NotFound.scss";

function NotFound() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="not-found-page">
      <h2>Page not found</h2>
      <p>{t.notFoundMessage}</p>
      <Link to="/">{t.returnHome}</Link>
    </section>
  );
}

export default NotFound;
