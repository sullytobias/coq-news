import { Toggle } from "./components/Toggle/Toggle";
import { Banner } from "./components/Banner/Banner";

import "./App.scss";

export default function App({ children }) {
    return (
        <div className="App">
            <Toggle />
            <Banner />
            {children}
        </div>
    );
}
