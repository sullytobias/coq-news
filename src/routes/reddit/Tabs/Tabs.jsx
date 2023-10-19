import { Link } from "react-router-dom";

import "./Tabs.scss";

export function Tabs({ menu }) {
    return (
        <ul className="Tabs">
            {menu?.map((item, index) => (
                <Link key={index} to={item.link}>
                    {item.label}
                </Link>
            ))}
        </ul>
    );
}
