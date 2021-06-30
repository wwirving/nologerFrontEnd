import "./App.css";
import styles from "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <Nav />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
