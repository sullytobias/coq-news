import { Link } from "react-router-dom";

import "./Card.scss";

export function Card({
    imgUrl,
    title,
    textContent,
    numberOfComments,
    score,
    author,
    created,
    id,
    commentsData,
    domain,
}) {
    return (
        <Link
            className="Card"
            state={{ commentsData, title, textContent, imgUrl, domain }}
            to={`/reddit/${id}`}
        >
            <div className="Card__upvotes">{score}</div>
            <div className="Card__rightPanel">
                <div className="Card__posted">
                    Posted by u/{author} -{" "}
                    <span className="Card__created">{created}</span>
                </div>
                <h3 className="Card__title">{title}</h3>
                <div className="Card__content">
                    {imgUrl !== "self" && domain === "i.redd.it" ? (
                        <img className="Card__image" src={imgUrl} alt="test" />
                    ) : (
                        <div className="Card__text">
                            {textContent ||
                                (imgUrl !== "self" && (
                                    <div>
                                        <Link target="_blank" to={imgUrl}>
                                            {imgUrl}
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
                <div className="Card__comments">
                    {numberOfComments} Comments
                </div>
            </div>
        </Link>
    );
}
