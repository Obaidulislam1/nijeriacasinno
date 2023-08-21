import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            }
        ]
    },
]);