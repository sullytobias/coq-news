import { useState, useEffect } from "react";

import { main } from "../../api/reddit/posts";

import { Card } from "../../components/Card/Card";
import { Tabs } from "./Tabs/Tabs";
import { Filters } from "../../components/Filters/Filters";

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
    const [filter, setFilter] = useState("hot");
    const [periodFilter, setPeriodFilter] = useState("today");

    useEffect(() => {
        main(filter, periodFilter).then((posts) => setPosts(posts));
    }, [filter, periodFilter]);

    return (
        <div className="Reddit">
            <Tabs menu={TMP_MENU} />
            <Filters
                handleFilter={(filter) => setFilter(filter)}
                handlePeriodFilter={(periodFilter) =>
                    setPeriodFilter(periodFilter)
                }
            />
            <div className="Reddit__posts">
                {posts?.map((post, index) => (
                    <Card
                        key={index}
                        id={post?.id}
                        score={post?.score}
                        title={post?.title}
                        author={post?.author}
                        textContent={post.selftext}
                        imgUrl={post?.thumbnail}
                        created={post?.created}
                        numberOfComments={post?.numberOfComments}
                        commentsData={post?.commentsData}
                    />
                ))}
            </div>
        </div>
    );
}
