async function fetchPostComments(accessToken, subreddit, postId) {
    const apiUrl = `https://oauth.reddit.com/r/${subreddit}/comments/${postId}.json`;

    const response = await fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();

    return data[1].data.children;
}

export async function mainFetchComments(accessToken, subreddit, postId) {
    try {
        const comments = await fetchPostComments(
            accessToken,
            subreddit,
            postId
        );

        return comments?.map((comment) => ({
            body: comment.data.body,
            replies: comment.data.replies.data,
        }));
    } catch (error) {
        console.error("Error:", error);
    }
}