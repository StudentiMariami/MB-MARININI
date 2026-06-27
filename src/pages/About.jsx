import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./About.scss";

function About() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="about-page">
      <h2>{t.aboutTitle}</h2>
      <p>{t.contentAbout}</p>
      <div className="about-features">
        <div>
          <h3>{t.featureHooks}</h3>
          <p>{t.featureHooksDescription}</p>
        </div>
        <div>
          <h3>{t.featureApi}</h3>
          <p>{t.featureApiDescription}</p>
        </div>
        <div>
          <h3>{t.featureResponsive}</h3>
          <p>{t.featureResponsiveDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
