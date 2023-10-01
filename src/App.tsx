import css from "./App.module.scss";
import logo from "./logo.svg";

const App = () => (
  <div className={css.App}>
    <header className={css.AppHeader}>
      <img src={logo} className={css.AppLogo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={css.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
