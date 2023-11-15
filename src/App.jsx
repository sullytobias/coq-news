import { Banner } from "./components/Banner/Banner";

import "./App.scss";

export default function App({ children }) {
    return (
        <div className="App">
            <Banner />
            {children}
        </div>
    );
}
