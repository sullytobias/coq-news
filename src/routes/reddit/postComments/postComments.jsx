import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Markup } from "interweave";

import "./postComments.scss";

export function PostComments() {
    const { state } = useLocation();
    const { commentsData, title, textContent, imgUrl } = state;

    const [showReplies, setShowReplies] = useState(false);

    function handleReplies() {
        setShowReplies((prev) => !prev);
    }

    return (
        <div className="PostComments">
            <Link className="PostComments__back" to="/reddit">
                Back
            </Link>
            <div className="PostComments__header">
                <h2>{title}</h2>
                {imgUrl !== "self" ? (
                    <img
                        className="PostComments__image"
                        src={imgUrl}
                        alt="test"
                    />
                ) : (
                    <div className="PostComments__textContent">
                        {textContent}
                    </div>
                )}
            </div>
            {!showReplies && (
                <div
                    className="PostComments__showReplies"
                    onClick={handleReplies}
                >
                    Show Replies
                </div>
            )}
            <ul className="PostComments__comments">
                {commentsData?.map((comment, index) => {
                    const formattedComment = comment?.body?.replace(
                        /\s*\S*="[^"]+"\s*/gm,
                        ""
                    );

                    const replies = comment.replies?.children;

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
                            {showReplies &&
                                replies?.map((reply, index) => (
                                    <span
                                        className="PostComments__replies"
                                        key={index}
                                    >
                                        {reply?.data?.body}
                                    </span>
                                ))}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
