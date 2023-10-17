import { Link } from "react-router-dom";

import coqBanner from "./assets/cavesOfQudBanner.png";

import "./App.scss";

function App({ children }) {
    return (
        <div className="App">
            <img src={coqBanner} alt="coqBanner" />
            <div>
                <Link to="/reddit">Reddit</Link>
                <Link to="/x">X</Link>
            </div>

            {children}
        </div>
    );
}

export default App;
