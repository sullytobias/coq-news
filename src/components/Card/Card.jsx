import { Link } from "react-router-dom";

import "./Card.scss";

export function Card({ imgUrl }) {
    return (
        <Link className="Card">
            <div className="Card__upvotes">12</div>
            <div className="Card__rightPanel">
                <div className="Card__posted">
                    Posted by u/AlaskanDude1985 15 hours ago
                </div>
                <h3 className="Card__title">
                    So how does one get the “What with the disembowelment and
                    all” achievement?
                </h3>
                <div className="Card__content">
                    {imgUrl ? (
                        <img className="Card__image" src={imgUrl} alt="test" />
                    ) : (
                        "How hard is this game to learn (not master)?"
                    )}
                </div>
                <div className="Card__comments">7 Comments</div>
            </div>
        </Link>
    );
}
