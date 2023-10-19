import coqBanner from "./assets/cavesOfQudBanner.png";
import { Toggle } from "./components/Toggle/Toggle";

import "./App.scss";

export default function App({ children }) {
    return (
        <div className="App">
            <Toggle />

            <img src={coqBanner} alt="coqBanner" />

            {children}
        </div>
    );
}
