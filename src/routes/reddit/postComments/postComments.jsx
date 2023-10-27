import { Link, useLocation } from "react-router-dom";
import { Markup } from "interweave";

import "./postComments.scss";

export function PostComments() {
    const { state } = useLocation();
    const { commentsData, title, textContent } = state;

    return (
        <div className="PostComments">
            <Link to="/reddit">Back</Link>
            <div className="PostComments__header">
                <h3>{title}</h3>
                <div>{textContent}</div>
            </div>
            <ul className="PostComments__comments">
                {commentsData?.map((comment, index) => {
                    const formattedComment = comment.replace(
                        /\s*\S*="[^"]+"\s*/gm,
                        ""
                    );

                    return (
                        <li key={index}>
                            <Markup content={formattedComment} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
