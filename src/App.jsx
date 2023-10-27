import { Toggle } from "./components/Toggle/Toggle";
import { Banner } from "./components/Banner/Banner";

import "./App.scss";

export default function App({ children, noToggle }) {
    return (
        <div className="App">
            {!noToggle && <Toggle />}
            <Banner />
            {children}
        </div>
    );
}
