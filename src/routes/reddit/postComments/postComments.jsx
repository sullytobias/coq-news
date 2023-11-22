import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Markup } from "interweave";

import "./postComments.scss";

function findHighestUps(commentData) {
    if (!commentData || commentData.length === 0) return null;

    const highestUpsObject = commentData.reduce((prev, current) => {
        const prevUps = prev.data.ups || 0;
        const currentUps = current.data.ups || 0;

        return prevUps > currentUps ? prev : current;
    });

    return highestUpsObject;
}

export function PostComments() {
    const { state } = useLocation();
    const { commentsData, title, textContent, imgUrl, domain } = state;

    const [showReplies, setShowReplies] = useState(false);

    function handleReplies() {
        setShowReplies((prev) => !prev);
    }

    return (
        <div className="PostComments">
            <Link className="PostComments__back" to="/reddit">
                <FontAwesomeIcon icon={faArrowLeftLong} />
                Back
            </Link>
            <div className="PostComments__header">
                <h2>{title}</h2>
                {imgUrl !== "self" && domain === "i.redd.it" ? (
                    <img
                        className="PostComments__image"
                        src={imgUrl}
                        alt="test"
                    />
                ) : (
                    <div className="PostComments__textContent">
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
            {!showReplies && (
                <div
                    className="PostComments__showReplies"
                    onClick={handleReplies}
                >
                    {showReplies ? "Show Replies" : "Hide Replies"}
                </div>
            )}
            <ul className="PostComments__comments">
                {commentsData?.map((comment, index) => {
                    const formattedComment = comment?.body?.replace(
                        /\s*\S*="[^"]+"\s*/gm,
                        ""
                    );

                    const replies = comment.replies?.children;

                    const bestReplyFromComment = findHighestUps(replies);

                    return (
                        <li key={index}>
                            <Markup
                                className="PostComments__mainComment"
                                content={formattedComment}
                            />
                            {!showReplies && replies?.length && (
                                <div className="PostComments__repliesShow">
                                    Replies...
                                </div>
                            )}
                            {showReplies && (
                                <span
                                    className="PostComments__replies"
                                    key={index}
                                >
                                    {bestReplyFromComment?.data?.body}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
