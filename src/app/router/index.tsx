import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/layout/ui";
import { CalendarPage } from "../../pages/calendar";
import { MeetingEditPage } from "../../pages/meeting-edit";
import { SearchPage } from "../../pages/search";
import { HomePage } from "../../pages/main";
import { PrivateRoute } from "./private";
import { CreatePage } from "../../pages/createPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops...</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/search",
        element: (
          <PrivateRoute>
            <SearchPage />
          </PrivateRoute>
        ),
      },
      // { path: "/createmeet", element: <CreatePage /> },

      {
        path: "/calendar",
        element: (
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
        ),
      },

      {
        path: "/meeting/:id/edit",
        element: (
          <PrivateRoute>
            <MeetingEditPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
