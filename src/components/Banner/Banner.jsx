import coqBanner from "../../assets/cavesOfQudBanner.png";

import "./Banner.scss";

export function Banner() {
    return (
        <div className="Banner">
            <img className="Banner__image" src={coqBanner} alt="coqBanner" />
        </div>
    );
}
