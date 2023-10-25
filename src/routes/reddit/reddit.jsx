import { useState, useEffect } from "react";

import { fetchSubredditPosts } from "../../api/reddit/posts";

import { Card } from "../../components/Card/Card";
import { Tabs } from "./Tabs/Tabs";

import "./reddit.scss";

const TMP_MENU = [
    { label: "Posts" },
    { label: "Wiki" },
    { label: "Qud Discord" },
    { label: "Kitfox Discord" },
    { label: "Patreon" },
];

export function Reddit() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchSubredditPosts().then((posts) => setPosts(posts));
    }, []);

    return (
        <div className="Reddit">
            <Tabs menu={TMP_MENU} />
            {posts.map((post, index) => (
                <Card
                    key={index}
                    score={post?.score}
                    title={post?.title}
                    author={post?.author}
                    textContent={post.selftext}
                    imgUrl={post?.thumbnail}
                    created={post?.created}
                />
            ))}
        </div>
    );
}
