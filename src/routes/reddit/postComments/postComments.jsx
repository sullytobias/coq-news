import { Link, useLocation } from "react-router-dom";
import { Markup } from "interweave";

import "./postComments.scss";

export function PostComments() {
    const { state } = useLocation();
    const { commentsData, title, textContent, imgUrl } = state;

    return (
        <div className="PostComments">
            <Link className="PostComments__back" to="/reddit">
                Back
            </Link>
            <div className="PostComments__header">
                <h3>{title}</h3>
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
                            {replies?.map((reply, index) => (
                                <span
                                    className="PostComments__replies"
                                    key={index}
                                >
                                    - {reply?.data?.body}
                                </span>
                            ))}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
