import { mainFetchComments } from "./comments";

const clientId = "_BGCGwQH4eO3LODyUpGx7A";
const clientSecret = "ZHcTAc2nYdFUyCRwlzGiaocokh_JbA";

const subreddit = "cavesofqud";

async function getAccessToken() {
    const response = await fetch("https://www.reddit.com/api/v1/access_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: "grant_type=client_credentials",
    });

    const data = await response.json();
    return data.access_token;
}

// Function to fetch posts from the specified subreddit
async function fetchSubredditPosts(accessToken) {
    const apiUrl = `https://oauth.reddit.com/r/${subreddit}/hot?limit=10`;

    const response = await fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();

    const postData = await Promise.all(
        data?.data?.children?.map(async (post) => {
            const idPost = post.data.id;

            const comments = await mainFetchComments(
                accessToken,
                subreddit,
                idPost
            );

            return {
                id: idPost,
                title: post.data.title,
                selftext: post.data.selftext,
                author: post.data.author,
                score: post.data.score || post.data.ups,
                thumbnail:
                    post.data.url_overridden_by_dest || post.data.thumbnail,
                created: new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                }).format(Date.now(post.data.created)),
                numberOfComments: comments?.length,
                commentsData: comments,
            };
        })
    );

    return postData;
}

export async function main() {
    try {
        const accessToken = await getAccessToken();
        const posts = await fetchSubredditPosts(accessToken);

        return posts;
    } catch (error) {
        console.error("Error:", error);
    }
}
