const subreddit = "cavesofqud";

export async function fetchSubredditPosts() {
    const apiUrl = `https://www.reddit.com/r/${subreddit}/top.json?limit=10`;

    try {
        const response = await fetch(apiUrl);

        const data = await response.json();

        const postData = data.data.children.map((post) => ({
            title: post.data.title,
            selftext: post.data.selftext,
            author: post.data.author,
            score: post.data.score || post.data.ups,
            thumbnail: post.data.url_overridden_by_dest || post.data.thumbnail,
            created: new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }).format(Date.now(post.data.created)),
        }));

        return postData;
    } catch (error) {
        console.error("Error:", error);
    }
}
