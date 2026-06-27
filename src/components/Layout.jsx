import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./Layout.scss";

function Layout() {
  const { theme, setTheme, isDark } = useContext(ThemeContext);
  const { language, setLanguage, t } = useContext(LanguageContext);
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <h1>MB MARININI</h1>
          <p>{t.brandSubtitle}</p>
        </div>

        <nav className="app-nav">
          <NavLink to="/" end>
            {t.navHome}
          </NavLink>
          <NavLink to="/products">{t.navProducts}</NavLink>
          <NavLink to="/cart">{t.navCart}</NavLink>
          <NavLink to="/about">{t.navAbout}</NavLink>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="ka">KA</option>
          </select>
        </div>
      </header>

      <main className="app-main">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="page-wrapper"
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="app-footer">
        <small>© 2026 MB MARININI</small>
      </footer>
    </div>
  );
}

export default Layout;
