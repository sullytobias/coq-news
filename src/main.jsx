import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Reddit } from "./routes/reddit.jsx";
import { X } from "./routes/x.jsx";

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
