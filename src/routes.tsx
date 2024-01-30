import { Root } from "@/routes/Root.tsx";
import { ErrorPage } from "@/components/Error.tsx";
import { Profile } from "@/routes/Profile.tsx";
import { createBrowserRouter } from "react-router-dom";
import { PostDetails } from "@/routes/PostDetails";
import { Timeline } from "./routes/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Timeline /> },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "post/:postId",
        element: <PostDetails />,
      },
    ],
  },
]);
