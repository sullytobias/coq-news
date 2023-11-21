import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import "./Loader.scss";

export function Loader() {
    return (
        <div className="Loader">
            <FontAwesomeIcon icon={faCircleNotch} />
        </div>
    );
}
