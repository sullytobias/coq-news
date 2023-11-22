import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import "./Tabs.scss";

export function Tabs({ menu }) {
    return (
        <ul className="Tabs">
            {menu?.map((item, index) => (
                <Link target="_blank" key={index} to={item.link}>
                    {item.label}
                    {item.link && (
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    )}
                </Link>
            ))}
        </ul>
    );
}
