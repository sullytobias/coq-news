import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Reddit } from "./routes/reddit/reddit.jsx";
import { PostComments } from "./routes/reddit/postComments/postComments.jsx";
import { X } from "./routes/x/x.jsx";

import App from "./App.jsx";

import "./index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "reddit",
        element: (
            <App>
                <Reddit />
            </App>
        ),
    },
    {
        path: "/reddit/:postId",
        element: (
            <App noToggle>
                <PostComments />
            </App>
        ),
    },
    {
        path: "x",
        element: (
            <App>
                <X />
            </App>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
